// backend/routes/jobRoutes.js
import express from "express";
import db from "../database.js";

const router = express.Router();

// ✅ Get All Jobs (Career Page)
router.get("/jobs", (req, res) => {
  const sql = "SELECT * FROM jobs ORDER BY id DESC";
  db.query(sql, (err, result) => {
    if (err) return res.status(500).json({ success: false, message: "Failed to fetch jobs" });
    res.json(result);
  });
});

export default router;
