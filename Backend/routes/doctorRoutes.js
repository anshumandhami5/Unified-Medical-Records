const Doctor = require("../models/Doctor");
const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const express = require("express");

router.get("/doctors", async (req, res) => {
  const doctors = await Doctor.find();
  res.json(doctors);
});
router.delete("/delete-doctor/:id", async (req, res) => {
  await Doctor.findByIdAndDelete(req.params.id);
  res.json({ msg: "Doctor deleted" });
});
router.post("/reset-password/:token", async (req, res) => {
  try {
    const { password } = req.body;

    const doctor = await Doctor.findOne({
      resetToken: req.params.token,
      resetTokenExpiry: { $gt: Date.now() },
    });

    if (!doctor) {
      return res.status(400).json({ msg: "Invalid or expired token" });
    }

    const hashed = await bcrypt.hash(password, 10);

    doctor.password = hashed;
    doctor.isVerified = true;
    doctor.resetToken = undefined;
    doctor.resetTokenExpiry = undefined;

    await doctor.save();

    res.json({ msg: "Password set successfully" });

  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server error" });
  }
});
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const doctor = await Doctor.findOne({ email });

    if (!doctor) {
      return res.status(400).json({ msg: "Doctor not found" });
    }

    // 🔥 NEW CHECK (VERY IMPORTANT)
    if (!doctor.isVerified) {
      return res.status(403).json({
        msg: "Please set your password first using the email link",
      });
    }

    const isMatch = await bcrypt.compare(password, doctor.password);

    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: doctor._id, role: "doctor" },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({ token });

  } catch (err) {
    console.log("DOCTOR LOGIN ERROR:", err);
    res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;