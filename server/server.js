const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const visitsFilePath = path.join(__dirname, "visits.json");

function readVisits() {
  try {
    const data = fs.readFileSync(visitsFilePath, "utf-8");
    return JSON.parse(data || "[]");
  } catch (error) {
    return [];
  }
}

function writeVisits(visits) {
  fs.writeFileSync(visitsFilePath, JSON.stringify(visits, null, 2));
}

app.post("/verify", (req, res) => {
  const { code } = req.body;

  if (!code) {
    return res.status(400).json({ success: false, message: "Code is required" });
  }

  if (code === process.env.SECRET_CODE) {
    return res.json({ success: true });
  }

  return res.status(401).json({ success: false, message: "Invalid code" });
});

app.post("/log-visit", (req, res) => {
  const forwardedFor = req.headers["x-forwarded-for"];
  const ip =
    typeof forwardedFor === "string"
      ? forwardedFor.split(",")[0].trim()
      : req.socket.remoteAddress || "Unknown";

  const visit = {
    time: new Date().toISOString(),
    readableTime: new Date().toLocaleString(),
    ip,
    userAgent: req.headers["user-agent"] || "Unknown",
    page: req.body.page || "home"
  };

  const visits = readVisits();
  visits.unshift(visit);
  writeVisits(visits);

  res.json({ success: true });
});

app.get("/visits", (req, res) => {
  const visits = readVisits();
  res.json(visits);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});