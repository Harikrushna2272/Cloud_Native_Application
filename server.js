const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// API Routes
app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    message: "Server is running!",
    timestamp: new Date().toISOString(),
  });
});

app.get("/api/data", (req, res) => {
  res.json({
    message: "Hello from the backend!",
    data: [
      { id: 1, name: "Item 1", description: "This is the first item" },
      { id: 2, name: "Item 2", description: "This is the second item" },
      { id: 3, name: "Item 3", description: "This is the third item" },
    ],
    server_info: {
      node_version: process.version,
      platform: process.platform,
      uptime: process.uptime(),
    },
  });
});

app.post("/api/message", (req, res) => {
  const { message } = req.body;
  res.json({
    received: message,
    response: `Server received: "${message}"`,
    timestamp: new Date().toISOString(),
  });
});

// Serve frontend
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`📱 Access the app at: http://localhost:${PORT}`);
  console.log(
    `⚡ API endpoints available at /api/health, /api/data, /api/message`
  );
});
