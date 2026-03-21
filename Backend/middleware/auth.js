const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const token = req.header("Authorization");

  if (!token) return res.status(401).json({ message: "No token" });

  try {
    const verified = jwt.verify(token, "SECRET_KEY");
    req.admin = verified;
    next();
  } catch {
    res.status(400).json({ message: "Invalid token" });
  }
};