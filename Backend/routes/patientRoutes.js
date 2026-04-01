const express = require("express");
const router = express.Router();
const Patient = require("../models/Patient");
const sendEmail = require("../utils/sendEmail"); // 🔥 import

// SEND OTP (EMAIL)
router.post("/send-otp", async (req, res) => {
  const { email } = req.body;

  try {
    // 🔍 find patient by email only
    const patient = await Patient.findOne({ email });

    if (!patient) {
      return res.status(404).json({ msg: "Patient not found" });
    }

    // 🔐 generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // ⏳ save OTP
    patient.otp = otp;
    patient.otpExpiry = Date.now() + 300000; // 5 minutes

    await patient.save();

    // 📧 send email
    await sendEmail(
      email,
      `
      <div style="font-family: Arial; padding: 20px;">
        <h2>UMRS Login OTP</h2>
        <p>Your OTP for login is:</p>
        <h1 style="letter-spacing: 5px;">${otp}</h1>
        <p>This OTP will expire in 5 minutes.</p>
      </div>
      `
    );

    res.json({ msg: "OTP sent to email" });

  } catch (err) {
    console.log("SEND OTP ERROR:", err);
    res.status(500).json({ msg: "Server error" });
  }
});
const jwt = require("jsonwebtoken");

router.post("/verify-otp", async (req, res) => {
  const { contact, otp } = req.body;

  try {
    const patient = await Patient.findOne({
      $or: [{ email: contact }, { phone: contact }],
    });

    if (!patient || patient.otp !== otp) {
      return res.status(400).json({ msg: "Invalid OTP" });
    }

    if (patient.otpExpiry < Date.now()) {
      return res.status(400).json({ msg: "OTP expired" });
    }

    const token = jwt.sign(
      { id: patient._id, role: "patient" },
      process.env.JWT_SECRET
    );

    res.json({ token });

  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;