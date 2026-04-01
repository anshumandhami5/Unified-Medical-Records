const nodemailer = require("nodemailer");

const sendEmail = async (to, htmlContent) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"UMRS" <${process.env.EMAIL_USER}>`,
      to,
      subject: "UMRS - Complete Your Account Setup",
      html: htmlContent,
    });

    console.log("Email sent to:", to);

  } catch (err) {
    console.log("EMAIL ERROR:", err);
  }
};

module.exports = sendEmail;