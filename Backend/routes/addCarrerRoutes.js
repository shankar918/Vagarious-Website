// routes/addcarrerRoutes.js
import express from "express";
import db from "../database.js";

const router = express.Router();

/* ------------------------ ✅ Add New Career ------------------------ */
router.post("/addcarrer", (req, res) => {
  const { role, location, education, experience, description, skills } = req.body;

  if (!role || !location) {
    return res
      .status(400)
      .json({ success: false, message: "Role and Location are required" });
  }

  const sql = `
    INSERT INTO addcarrer (role, location, education, experience, description, skills)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(sql, [role, location, education, experience, description, skills], (err, result) => {
    if (err) {
      console.error("❌ Insert error:", err);
      return res.status(500).json({ success: false, message: "Failed to add career" });
    }

    console.log("✅ Career inserted:", result.insertId);
    res.json({ success: true, message: "Career added successfully!" });
  });
});

/* ------------------------ ✅ Get All Careers ------------------------ */
router.get("/addcarrer", (req, res) => {
  const sql = "SELECT * FROM addcarrer ORDER BY id DESC";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("❌ Fetch error:", err);
      return res.status(500).json({ success: false, message: "Failed to fetch careers" });
    }

    res.json(results);
  });
});

/* ------------------------ ✅ Update a Career ------------------------ */
router.put("/addcarrer/:id", (req, res) => {
  const { id } = req.params;
  const { role, location, education, experience, description, skills } = req.body;

  const sql = `
    UPDATE addcarrer
    SET role = ?, location = ?, education = ?, experience = ?, description = ?, skills = ?
    WHERE id = ?
  `;

  db.query(sql, [role, location, education, experience, description, skills, id], (err, result) => {
    if (err) {
      console.error("❌ Update error:", err);
      return res.status(500).json({ success: false, message: "Failed to update career" });
    }

    res.json({ success: true, message: "Career updated successfully!" });
  });
});

/* ------------------------ ✅ Delete a Career ------------------------ */
router.delete("/addcarrer/:id", (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM addcarrer WHERE id = ?";

  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error("❌ Delete error:", err);
      return res.status(500).json({ success: false, message: "Failed to delete career" });
    }

    res.json({ success: true, message: "Career deleted successfully!" });
  });
});

export default router;
