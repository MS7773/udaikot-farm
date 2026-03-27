import express from "express";
import nodemailer from "nodemailer";

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "mishu777seth@gmail.com",
        pass: "fpjz ubfq mzcg bqst",
      },
    });

    await transporter.sendMail({
      from: "mishu777seth@gmail.com",
      to: "mishu777seth@gmail.com",
      subject: "New Contact Message",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    res.json({ message: "Email sent successfully" });

  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;