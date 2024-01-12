// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import nodemailer from "nodemailer";

interface EmailMessageParams {
  email: string;
  message: string;
}

async function saveToDatabase({
  email,
  message,
}: EmailMessageParams): Promise<void> {
  await prisma.contact.create({
    data: {
      email,
      message,
    },
  });
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    res.status(200).json({ success: true, message: "OK aaso" });
  }
  if (req.method === "POST") {
    const { email, message } = req.body;

    try {
      // Save to database
      await saveToDatabase({ email, message });
      await sendEmail(email, message);
      // Send email
      // (your existing email sending logic)

      res.status(200).json({ success: true });
    } catch (error) {
      console.error("Error processing contact form:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
async function sendEmail(email: string, message: string): Promise<void> {
  const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "8d08cc9529c954",
      pass: "223d0d7137f42a",
    },
  });

  // Send mail with defined transport object
  await transporter.sendMail({
    from: "system@shubhu.com", // sender address
    to: "sales@shubhu.com", // list of receivers
    subject: "New Contact Form Submission", // Subject line
    html: `<p>Email: ${email}</p><p>Message: ${message}</p>`, // HTML body
  });
}
