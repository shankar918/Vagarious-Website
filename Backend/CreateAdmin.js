const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const Admin = require("./models/Admin");
require("dotenv").config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected ✅");
    createAdmin(); // call function after DB is connected
  })
  .catch(err => console.log(err));

async function createAdmin() {
  const hashedPassword = await bcrypt.hash("123456", 10);

  const admin = new Admin({
    username: "admin",
    password: hashedPassword,
  });

  await admin.save();
  console.log("Admin created ✅");
  mongoose.disconnect(); // disconnect after creating
}