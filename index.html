<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <title>NorthSky Auction · Contractor Live Bidding</title>
  <!-- Socket.IO client -->
  <script src="https://cdn.socket.io/4.7.5/socket.io.min.js"></script>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      background: radial-gradient(circle at 10% 20%, #0a0f1e, #03050b);
      font-family: 'Segoe UI', Roboto, system-ui, -apple-system, sans-serif;
      color: #eef2ff;
      min-height: 100vh;
      padding: 1.5rem;
    }

    .container {
      max-width: 1100px;
      margin: 0 auto;
    }

    /* glass header */
    .glass-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;
      background: rgba(15, 23, 42, 0.6);
      backdrop-filter: blur(12px);
      padding: 1rem 2rem;
      border-radius: 80px;
      border: 1px solid rgba(255, 255, 255, 0.08);
      margin-bottom: 2rem;
    }

    .logo {
      font-weight: 800;
      font-size: 1.5rem;
      background: linear-gradient(135deg, #fff, #60a5fa);
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
    }

    .status-pill {
      background: #1e293b;
      padding: 6px 16px;
      border-radius: 40px;
      font-size: 0.75rem;
      font-weight: 600;
      letter-spacing: 0.3px;
      border: 1px solid #334155;
    }

    .status-pill.connected {
      background: #22c55e20;
      border-color: #22c55e;
      color: #86efac;
    }

    .status-pill.disconnected {
      background: #ef444420;
      border-color: #ef4444;
      color: #fca5a5;
    }

    /* cards */
    .card {
      background: rgba(17, 24, 39, 0.8);
      backdrop-filter: blur(8px);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 32px;
      padding: 1.8rem;
      margin-bottom: 1.8rem;
      transition: 0.2s;
    }

    .card h2 {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .form-group {
      margin-bottom: 1rem;
    }

    label {
      display: block;
      font-size: 0.8rem;
      font-weight: 500;
      margin-bottom: 6px;
      opacity: 0.8;
    }

    input, select, button {
      width: 100%;
      padding: 12px 16px;
      border-radius: 60px;
      border: none;
      font-size: 0.95rem;
      transition: 0.2s;
    }

    input, select {
      background: #0f172a;
      border: 1px solid #1e293b;
      color: white;
      outline: none;
    }

    input:focus, select:focus {
      border-color: #3b82f6;
      box-shadow: 0 0 0 2px #3b82f620;
    }

    button {
      background: linear-gradient(105deg, #22c55e, #16a34a);
      color: white;
      font-weight: 700;
      cursor: pointer;
      margin-top: 8px;
    }

    button:hover {
      transform: translateY(-2px);
      filter: brightness(1.05);
      box-shadow: 0 6px 14px rgba(34, 197, 94, 0.3);
    }

    .btn-outline {
      background: transparent;
      border: 1px solid #475569;
      color: #cbd5e6;
    }

    .btn-outline:hover {
      background: #1e293b;
      transform: none;
      box-shadow: none;
    }

    .bid-panel {
      background: #0f172a;
      border-radius: 24px;
      padding: 1rem;
      margin-top: 1rem;
    }

    .info-row {
      display: flex;
      justify-content: space-between;
      margin: 12px 0;
      padding: 8px 0;
      border-bottom: 1px solid #1e293b;
    }

    .highest-bid {
      color: #22c55e;
      font-size: 1.5rem;
      font-weight: 800;
    }

    .timer {
      font-family: monospace;
      font-size: 1.3rem;
      font-weight: 700;
      color: #f59e0b;
    }

    .winner-msg {
      background: #1e293b;
      padding: 10px;
      border-radius: 20px;
      margin-top: 12px;
      text-align: center;
      font-weight: 600;
    }

    .flex-buttons {
      display: flex;
      gap: 12px;
      margin-top: 12px;
    }

    hr {
      border-color: #1e293b;
      margin: 16px 0;
    }

    @media (max-width: 640px) {
      body {
        padding: 1rem;
      }
      .glass-header {
        flex-direction: column;
        align-items: stretch;
        border-radius: 28px;
      }
    }
  </style>
</head>
<body>
<div class="container">
  <div class="glass-header">
    <div class="logo">🏛️ NorthSky Auction · Contractor Hub</div>
    <div class="status-pill" id="connectionStatus">Disconnected</div>
  </div>

  <!-- JOIN / LOGIN SECTION -->
  <div class="card">
    <h2>🔌 1. Join Auction Network</h2>
    <div class="form-group">
      <label>Contractor ID (your unique name/ID)</label>
      <input type="text" id="contractorId" placeholder="e.g., RooferPro_42" autocomplete="off">
    </div>
    <div class="form-group">
      <label>City / Market</label>
      <input type="text" id="cityName" placeholder="Calgary, Edmonton, Austin..." value="Calgary">
    </div>
    <button id="joinBtn">🌍 Join Live Market</button>
  </div>

  <!-- CREATE LEAD (for demo / lead generators) -->
  <div class="card">
    <h2>📋 2. Create New Lead (Auction)</h2>
    <div class="form-group">
      <label>Customer name</label>
      <input type="text" id="leadName" placeholder="John Doe">
    </div>
    <div class="form-group">
      <label>Contact (phone/email)</label>
      <input type="text" id="leadContact" placeholder="+123456789">
    </div>
    <div class="form-group">
      <label>Postal code</label>
      <input type="text" id="postalCode" placeholder="T2X 1A1">
    </div>
    <div class="form-group">
      <label>Service type</label>
      <select id="serviceType">
        <option>roof inspection</option>
        <option>roof replacement</option>
        <option>emergency repair</option>
      </select>
    </div>
    <button id="createLeadBtn">🚀 Start Auction (60s)</button>
    <div id="createLeadResult" style="margin-top: 10px; font-size: 0.8rem; opacity: 0.8;"></div>
  </div>

  <!-- LIVE AUCTION PANEL -->
  <div class="card">
    <h2>⏳ 3. Live Auction Feed</h2>
    <div id="auctionStatus">
      <div class="info-row">
        <span>📌 Active Lead ID:</span>
        <span id="activeLeadId">—</span>
      </div>
      <div class="info-row">
        <span>💰 Highest Bid:</span>
        <span id="highestBidDisplay" class="highest-bid">$0</span>
      </div>
      <div class="info-row">
        <span>⏱️ Time remaining:</span>
        <span id="timerDisplay" class="timer">—</span>
      </div>
    </div>

    <div class="bid-panel">
      <div class="form-group">
        <label>Your bid amount (USD)</label>
        <input type="number" id="bidAmount" placeholder="e.g., 450" step="10" min="0">
      </div>
      <button id="placeBidBtn">💰 Place Bid</button>
    </div>

    <div id="winnerMessage" class="winner-msg" style="display: none;"></div>
    <div id="auctionLog" style="font-size: 0.75rem; margin-top: 12px; opacity: 0.7; max-height: 100px; overflow-y: auto;"></div>
  </div>
</div>

<script>
  // ---------- GLOBALS ----------
  let socket = null;
  let contractorId = "";
  let currentCity = "";
  let activeLeadId = null;
  let expiresAt = null;
  let timerInterval = null;

  // DOM elements
  const statusSpan = document.getElementById("connectionStatus");
  const contractorInput = document.getElementById("contractorId");
  const cityInput = document.getElementById("cityName");
  const joinBtn = document.getElementById("joinBtn");
  const createLeadBtn = document.getElementById("createLeadBtn");
  const placeBidBtn = document.getElementById("placeBidBtn");
  const leadNameInput = document.getElementById("leadName");
  const leadContactInput = document.getElementById("leadContact");
  const postalCodeInput = document.getElementById("postalCode");
  const serviceSelect = document.getElementById("serviceType");
  const createLeadResultDiv = document.getElementById("createLeadResult");
  const activeLeadSpan = document.getElementById("activeLeadId");
  const highestBidSpan = document.getElementById("highestBidDisplay");
  const timerSpan = document.getElementById("timerDisplay");
  const winnerMessageDiv = document.getElementById("winnerMessage");
  const auctionLogDiv = document.getElementById("auctionLog");
  const bidAmountInput = document.getElementById("bidAmount");

  // Helper: add log message
  function addLog(msg, isError = false) {
    const logEntry = document.createElement("div");
    logEntry.textContent = `[${new Date().toLocaleTimeString()}] ${msg}`;
    logEntry.style.color = isError ? "#f87171" : "#94a3b8";
    auctionLogDiv.appendChild(logEntry);
    auctionLogDiv.scrollTop = auctionLogDiv.scrollHeight;
    // keep last 20 logs
    while (auctionLogDiv.children.length > 20) auctionLogDiv.removeChild(auctionLogDiv.firstChild);
  }

  // update UI for auction state
  function resetAuctionUI() {
    activeLeadId = null;
    expiresAt = null;
    activeLeadSpan.innerText = "—";
    highestBidSpan.innerText = "$0";
    timerSpan.innerText = "—";
    winnerMessageDiv.style.display = "none";
    winnerMessageDiv.innerHTML = "";
    bidAmountInput.value = "";
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = null;
  }

  function startTimerUpdater() {
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      if (!expiresAt) {
        timerSpan.innerText = "—";
        return;
      }
      const diff = expiresAt - Date.now();
      if (diff <= 0) {
        timerSpan.innerText = "CLOSED";
        if (timerInterval) clearInterval(timerInterval);
        timerInterval = null;
        return;
      }
      const seconds = Math.floor(diff / 1000);
      timerSpan.innerText = `${seconds}s`;
    }, 500);
  }

  // Socket event handlers
  function initSocketHandlers() {
    if (!socket) return;

    socket.on("connect", () => {
      statusSpan.innerText = "Connected";
      statusSpan.className = "status-pill connected";
      addLog("✅ Socket connected. Joining city...");
      if (currentCity && contractorId) {
        socket.emit("join_city", currentCity);
      }
    });

    socket.on("disconnect", () => {
      statusSpan.innerText = "Disconnected";
      statusSpan.className = "status-pill disconnected";
      addLog("❌ Socket disconnected", true);
      resetAuctionUI();
    });

    // New auction started
    socket.on("auction_started", (data) => {
      activeLeadId = data.leadId;
      expiresAt = data.expiresAt;
      activeLeadSpan.innerText = activeLeadId;
      highestBidSpan.innerText = "$0";
      winnerMessageDiv.style.display = "none";
      addLog(`🔔 NEW AUCTION: Lead ${activeLeadId} | expires at ${new Date(expiresAt).toLocaleTimeString()}`);
      startTimerUpdater();
    });

    // New bid received
    socket.on("new_bid", (data) => {
      highestBidSpan.innerText = `$${data.highestBid}`;
      addLog(`💰 New bid $${data.highestBid} from ${data.contractorId || "someone"}`);
    });

    // Auction closed
    socket.on("auction_closed", (data) => {
      const { leadId, winnerId, price } = data;
      addLog(`🏁 AUCTION CLOSED for lead ${leadId}. Winner: ${winnerId} | Price: $${price}`);
      if (winnerId === contractorId) {
        winnerMessageDiv.innerHTML = `🏆 YOU WON THIS LEAD! Price: $${price} — contact the customer now. 🏆`;
        winnerMessageDiv.style.background = "#22c55e20";
        winnerMessageDiv.style.border = "1px solid #22c55e";
      } else {
        winnerMessageDiv.innerHTML = `❌ Auction closed. Winner: ${winnerId} | Final price: $${price}`;
        winnerMessageDiv.style.background = "#1e293b";
        winnerMessageDiv.style.border = "1px solid #475569";
      }
      winnerMessageDiv.style.display = "block";
      // reset active lead after auction ends (no further bids)
      activeLeadId = null;
      expiresAt = null;
      activeLeadSpan.innerText = "—";
      if (timerInterval) clearInterval(timerInterval);
      timerInterval = null;
      timerSpan.innerText = "CLOSED";
    });
  }

  // Connect to backend server
  function connectToServer() {
    const serverUrl = window.location.origin; // uses same origin as frontend (proxy or same port)
    // In production, you may set a fixed backend URL, but we assume backend runs on same host:port.
    // If backend is separate, update this.
    const backendUrl = "http://localhost:3000"; // adjust if needed, but better to detect
    // Use the current host's origin if it's not file://, otherwise fallback
    let targetUrl = backendUrl;
    if (window.location.hostname !== "localhost" && window.location.hostname !== "127.0.0.1") {
      // For production, assume backend is same origin (or set via env)
      targetUrl = window.location.origin;
    }
    if (socket) socket.disconnect();
    socket = io(targetUrl, { transports: ["websocket", "polling"] });
    initSocketHandlers();
  }

  // Join city
  function joinMarket() {
    const newContractor = contractorInput.value.trim();
    const newCity = cityInput.value.trim();
    if (!newContractor || !newCity) {
      alert("Please enter Contractor ID and City");
      return;
    }
    contractorId = newContractor;
    currentCity = newCity;

    if (!socket || !socket.connected) {
      connectToServer();
      // wait for connect then emit join_city
      socket.once("connect", () => {
        socket.emit("join_city", currentCity);
        addLog(`Joined city: ${currentCity} as ${contractorId}`);
        statusSpan.innerText = "Connected";
        statusSpan.className = "status-pill connected";
      });
    } else {
      socket.emit("join_city", currentCity);
      addLog(`Joined city: ${currentCity} as ${contractorId}`);
    }
    resetAuctionUI();
  }

  // Create lead via API
  async function createLead() {
    const name = leadNameInput.value.trim();
    const contact = leadContactInput.value.trim();
    const postal = postalCodeInput.value.trim();
    const service = serviceSelect.value;
    const cityForLead = currentCity || cityInput.value.trim() || "unknown";

    if (!name || !contact || !postal) {
      alert("Please fill customer name, contact, and postal code");
      return;
    }

    createLeadResultDiv.innerText = "⏳ Creating lead & starting auction...";
    try {
      const response = await fetch("/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          contact,
          postalCode: postal,
          service,
          city: cityForLead
        })
      });
      const data = await response.json();
      if (data.success) {
        createLeadResultDiv.innerHTML = `✅ Lead created! Auction started for ID: ${data.leadId}`;
        addLog(`Lead created: ${data.leadId} in city ${cityForLead}`);
      } else {
        throw new Error(data.message || "Unknown error");
      }
    } catch (err) {
      console.error(err);
      createLeadResultDiv.innerHTML = `❌ Error: ${err.message}. Make sure backend is running on port 3000.`;
      addLog(`Lead creation failed: ${err.message}`, true);
    }
  }

  // Place bid
  function placeBid() {
    if (!socket || !socket.connected) {
      alert("Socket not connected. Please join a city first.");
      return;
    }
    if (!activeLeadId) {
      alert("No active auction in your city. Wait for a lead to be created.");
      return;
    }
    const amount = parseFloat(bidAmountInput.value);
    if (isNaN(amount) || amount <= 0) {
      alert("Enter a valid bid amount (>0)");
      return;
    }
    socket.emit("bid", {
      leadId: activeLeadId,
      contractorId: contractorId,
      amount: amount
    });
    addLog(`📤 You placed bid $${amount} on lead ${activeLeadId}`);
    bidAmountInput.value = "";
  }

  // Event listeners
  joinBtn.addEventListener("click", joinMarket);
  createLeadBtn.addEventListener("click", createLead);
  placeBidBtn.addEventListener("click", placeBid);

  // Optional: prefill contractor ID from localStorage
  const savedContractor = localStorage.getItem("northsky_contractor_id");
  if (savedContractor) contractorInput.value = savedContractor;
  contractorInput.addEventListener("change", () => {
    localStorage.setItem("northsky_contractor_id", contractorInput.value);
  });

  // Auto-connect on page load if contractor and city are filled
  window.addEventListener("load", () => {
    if (contractorInput.value.trim() && cityInput.value.trim()) {
      joinMarket();
    } else {
      addLog("Enter Contractor ID and City, then click 'Join Live Market'");
    }
  });
</script>
</body>
</html>