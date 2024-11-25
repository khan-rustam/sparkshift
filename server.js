import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST_SMTP,
  port: process.env.EMAIL_PORT_SMTP,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
    minVersion: "TLSv1.2",
  },
  logger: true,
  debug: true,
  connectionTimeout: 10000,
  greetingTimeout: 5000,
});

transporter.verify(function (error, success) {
  if (error) {
    console.error("IMAP connection error:", error);
    console.log("IMAP Settings:", {
      host: process.env.EMAIL_HOST_IMAP,
      port: process.env.EMAIL_PORT_IMAP,
      secure: process.env.EMAIL_PORT_IMAP === process.env.EMAIL_PORT_SMTP,
      user: process.env.EMAIL_USER ? "(set)" : "(not set)",
      pass: process.env.EMAIL_PASS ? "(set)" : "(not set)",
    });
  } else {
    console.log("Server is ready to take messages");
  }
});

app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `New Contact Form Submission: ${subject}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error.message);
    res.status(500).json({
      message: "Error sending email",
      error: error.message,
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
