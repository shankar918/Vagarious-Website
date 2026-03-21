const express = require("express");
const router = express.Router();
const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/login", async (req, res) => {
  console.log("Request body:", req.body); // <-- Add this
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Username & password required" });
  }

  const admin = await Admin.findOne({ username });
  if (!admin) return res.status(400).json({ message: "Invalid username" });

  const isMatch = await bcrypt.compare(password, admin.password);
  if (!isMatch) return res.status(400).json({ message: "Invalid password" });

  const token = jwt.sign({ id: admin._id }, "SECRET_KEY", { expiresIn: "1d" });
  res.json({ token });
});

module.exports = router;