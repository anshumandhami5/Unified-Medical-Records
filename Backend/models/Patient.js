const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,

  otp: String,
  otpExpiry: Date,
});

module.exports = mongoose.model("Patient", patientSchema);