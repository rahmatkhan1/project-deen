const express = require("express");
const path = require("path");

const app = express();
const PORT = 5000;

// frontend serve
app.use(express.static(path.join(__dirname, "../frontend")));

// root route -> force index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

// APIs
app.get("/api/quran", (req, res) => {
  res.json([
    { surah: "Al-Fatiha", ayahs: 7 },
    { surah: "Al-Baqarah", ayahs: 286 },
    { surah: "Al-Imran", ayahs: 200 }
  ]);
});

app.get("/api/duas", (req, res) => {
  res.json([
    "Dua before sleeping",
    "Dua after eating",
    "Dua for travelling",
    "Dua for forgiveness"
  ]);
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:5000`);
});
