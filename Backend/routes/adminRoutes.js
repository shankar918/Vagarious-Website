// backend/routes/adminRoutes.js
import express from "express";
import db from "../database.js";

const router = express.Router();

// ✅ Admin Login
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  const sql = "SELECT * FROM admins WHERE username = ? AND password = ?";
  db.query(sql, [username, password], (err, result) => {
    if (err) return res.status(500).json({ success: false, message: "Server error" });

    if (result.length > 0) {
      res.json({ success: true, message: "Login Successful" });
    } else {
      res.status(401).json({ success: false, message: "Invalid Credentials" });
    }
  });
});

// ✅ Add Job (Admin only)
router.post("/add-job", (req, res) => {
  const { title, description, location, salary } = req.body;
  const sql = "INSERT INTO jobs (title, description, location, salary) VALUES (?, ?, ?, ?)";

  db.query(sql, [title, description, location, salary], (err) => {
    if (err) return res.status(500).json({ success: false, message: "Failed to add job" });
    res.json({ success: true, message: "Job Added Successfully!" });
  });
});

export default router;
