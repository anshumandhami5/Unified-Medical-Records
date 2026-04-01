const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  isVerified: { type: Boolean, default: false },

  resetToken: String,
  resetTokenExpiry: Date,
});

module.exports = mongoose.model("Doctor", doctorSchema);