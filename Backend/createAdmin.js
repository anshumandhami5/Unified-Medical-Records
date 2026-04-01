const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Admin = require("./models/Admin");

// 🔥 CONNECT TO DB FIRST
mongoose.connect("mongodb://localhost:27017/umrs")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

async function createAdmin() {
  const hashed = await bcrypt.hash("admin123", 10);

  await Admin.create({
    email: "admin@umrs.com",
    password: hashed,
  });

  console.log("Admin created");
  process.exit();
}

createAdmin();