
import express from "express";
import db from "../database.js";

const router = express.Router();

// ✅ Get All Careers
router.get("/addcareer", (req, res) => {
  const sql = "SELECT * FROM careers ORDER BY id DESC";
  db.query(sql, (err, result) => {
    if (err) {
      console.error("❌ Fetch error:", err);
      return res.status(500).json({ success: false, message: "Failed to fetch careers" });
    }
    res.json(result);
  });
});

// ✅ Add Career
router.post("/addcareer", (req, res) => {
  const { role, location, education, experience, description, skills } = req.body;

  if (!role || !location) {
    return res.status(400).json({ success: false, message: "Role and location are required" });
  }

  const sql = `
    INSERT INTO careers (role, location, education, experience, description, skills)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(sql, [role, location, education, experience, description, skills], (err, result) => {
    if (err) {
      console.error("❌ Insert error:", err);
      return res.status(500).json({ success: false, message: "Failed to add career" });
    }
    res.json({ success: true, message: "Career added successfully!" });
  });
});

export default router;
