const express = require("express");
const router = express.Router();
const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Doctor = require("../models/Doctor");
const crypto = require("crypto");
const sendEmail = require("../utils/sendEmail");

router.get("/doctors", async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server error" });
  }
});
// ADD DOCTOR
router.post("/add-doctor", async (req, res) => {
  try {
    const { name, email } = req.body;

    // check if exists
    const exists = await Doctor.findOne({ email });
    if (exists) {
      return res.status(400).json({ msg: "Doctor already exists" });
    }

    // 🔥 generate reset token
    const resetToken = crypto.randomBytes(32).toString("hex");

    // create doctor WITHOUT usable password yet
    const doctor = new Doctor({
      name,
      email,
      password: "", // will be set later
      isVerified: false,
      resetToken,
      resetTokenExpiry: Date.now() + 3600000, // 1 hour
    });

    await doctor.save();

    // 🔗 reset link (frontend route)
    const resetLink = `http://localhost:5173/doctor/reset-password/${resetToken}`;

    // 📧 send email
    await sendEmail(
      email,
      `
      <h2>Welcome to UMRS</h2>
      <p>Your doctor account has been created.</p>
      <p>Click the link below to set your password:</p>
      <a href="${resetLink}">${resetLink}</a>
      <p>This link will expire in 1 hour.</p>
      `
    );

    res.json({ msg: "Doctor added and email sent" });

  } catch (err) {
    console.log("ADD DOCTOR ERROR:", err);
    res.status(500).json({ msg: "Server error" });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(400).json({ msg: "Admin not found" });
    }

    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: admin._id, role: "admin" },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({ token });

  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;