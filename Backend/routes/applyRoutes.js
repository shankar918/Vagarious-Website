// backend/routes/applyRoutes.js
import express from "express";
import db from "../database.js";

const router = express.Router();

// ✅ Apply for a Job
router.post("/apply", (req, res) => {
  const {
    fullname,
    gender,
    Email,
    mobile,
    Address,
    City,
    State,
    Resume,
  } = req.body;

  const sql = `
    INSERT INTO applications
    (name, gender, email, phone, address, city, state, resume)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [fullname, gender, Email, mobile, Address, City, State, Resume],
    (err) => {
      if (err) {
        console.error("❌ Error inserting:", err);
        return res.status(500).json({ success: false, message: "Failed to apply" });
      }
      res.json({ success: true, message: "✅ Application Submitted Successfully!" });
    }
  );
});

// ✅ Get All Applications
router.get("/applications", (req, res) => {
  const sql = `
    SELECT id, name, gender, email, phone, address, city, state, resume, applied_date
    FROM applications
    ORDER BY id DESC
  `;
  db.query(sql, (err, result) => {
    if (err) return res.status(500).json({ success: false, message: "Failed to fetch applications" });
    res.json(result);
  });
});

export default router;
