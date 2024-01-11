// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

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
