// // ✅ Update Job (for Admin)
// router.put("/update-job/:id", (req, res) => {
//   const { id } = req.params;
//   const { title, department, location, description, salary } = req.body;

//   const sql = `
//     UPDATE jobs
//     SET title = ?, department = ?, location = ?, description = ?, salary = ?
//     WHERE id = ?
//   `;

//   db.query(sql, [title, department, location, description, salary, id], (err) => {
//     if (err) {
//       console.error("❌ Error updating job:", err);
//       return res.status(500).json({ success: false, message: "Failed to update job" });
//     }
//     res.json({ success: true, message: "✅ Job updated successfully!" });
//   });
// });
