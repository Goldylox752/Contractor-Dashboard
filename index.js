import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import http from "http";
import { Server } from "socket.io";
import { createClient } from "@supabase/supabase-js";
import twilio from "twilio";
import { v4 as uuidv4 } from "uuid";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" }
});

/* =========================
   SUPABASE
========================= */
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

/* =========================
   TWILIO
========================= */
const smsClient = twilio(
  process.env.TWILIO_SID,
  process.env.TWILIO_AUTH
);

/* =========================
   ACTIVE AUCTIONS (memory layer)
========================= */
const auctions = {}; 
/*
leadId: {
  city,
  expiresAt,
  status,
  highestBid,
  winnerContractorId,
  bids: []
}
*/

/* =========================
   CREATE LEAD → START AUCTION
========================= */
app.post("/lead", async (req, res) => {
  try {
    const {
      name,
      contact,
      postalCode,
      service = "roof inspection",
      city = "unknown"
    } = req.body;

    const leadId = uuidv4();

    const lead = {
      id: leadId,
      name,
      contact,
      postal_code: postalCode,
      service,
      city,
      status: "auction",
      created_at: new Date().toISOString()
    };

    await supabase.from("leads").insert([lead]);

    // START AUCTION
    startAuction(leadId, city);

    return res.json({
      success: true,
      leadId,
      message: "Auction started"
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
});

/* =========================
   START AUCTION TIMER
========================= */
function startAuction(leadId, city) {
  const durationMs = 60 * 1000; // 60 sec auction

  auctions[leadId] = {
    city,
    status: "live",
    highestBid: 0,
    winner: null,
    bids: [],
    expiresAt: Date.now() + durationMs
  };

  io.to(city).emit("auction_started", {
    leadId,
    expiresAt: auctions[leadId].expiresAt
  });

  setTimeout(() => closeAuction(leadId), durationMs);
}

/* =========================
   PLACE BID (REAL TIME)
========================= */
io.on("connection", (socket) => {
  console.log("Contractor connected");

  socket.on("join_city", (city) => {
    socket.join(city);
  });

  socket.on("bid", ({ leadId, contractorId, amount }) => {
    const auction = auctions[leadId];
    if (!auction || auction.status !== "live") return;

    if (amount <= auction.highestBid) return;

    auction.highestBid = amount;
    auction.winner = contractorId;

    auction.bids.push({
      contractorId,
      amount,
      time: Date.now()
    });

    io.to(auction.city).emit("new_bid", {
      leadId,
      highestBid: amount,
      contractorId
    });
  });
});

/* =========================
   CLOSE AUCTION
========================= */
async function closeAuction(leadId) {
  const auction = auctions[leadId];
  if (!auction) return;

  auction.status = "closed";

  const winnerId = auction.winner;

  // update lead
  await supabase
    .from("leads")
    .update({
      status: "sold",
      final_price: auction.highestBid,
      winner: winnerId
    })
    .eq("id", leadId);

  // notify all contractors
  io.to(auction.city).emit("auction_closed", {
    leadId,
    winnerId,
    price: auction.highestBid
  });

  // OPTIONAL: send SMS to winner only
  // (you'd fetch contractor phone from DB)
}

/* =========================
   CONTRACTOR LISTENER EXAMPLE
========================= */
app.get("/auction/:id", (req, res) => {
  const auction = auctions[req.params.id];

  if (!auction) {
    return res.status(404).json({ error: "Not found" });
  }

  res.json(auction);
});

/* =========================
   HEALTH CHECK
========================= */
app.get("/", (req, res) => {
  res.json({
    status: "OK",
    system: "Lead Auction Engine v1"
  });
});

/* =========================
   START SERVER
========================= */
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`🚀 Auction Engine running on port ${PORT}`);
});