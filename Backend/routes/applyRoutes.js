// backend/routes/applyRoutes.js
import express from "express";
import db from "../database.js";

const router = express.Router();

// ✅ Apply for a Job
router.post("/apply", (req, res) => {
  const { name, email, phone, job_id, resume_url } = req.body;
  const sql = "INSERT INTO applications (name, email, phone, job_id, resume_url) VALUES (?, ?, ?, ?, ?)";

  db.query(sql, [name, email, phone, job_id, resume_url], (err) => {
    if (err) return res.status(500).json({ success: false, message: "Failed to apply" });
    res.json({ success: true, message: "Application Submitted Successfully!" });
  });
});

// ✅ Get All Applications (for admin)
router.get("/applications", (req, res) => {
  const sql = `
    SELECT a.id, a.name, a.email, a.phone, j.title AS job_title, a.resume_url
    FROM applications a
    JOIN jobs j ON a.job_id = j.id
    ORDER BY a.id DESC
  `;
  db.query(sql, (err, result) => {
    if (err) return res.status(500).json({ success: false, message: "Failed to fetch applications" });
    res.json(result);
  });
});

export default router;
