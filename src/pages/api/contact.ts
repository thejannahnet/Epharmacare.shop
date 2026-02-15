import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import { z } from "zod";

const applicationSchema = z.object({
    fullName: z.string().min(2),
    email: z.string().email(),
    phone: z.string().min(5),
    age: z.string().min(1),
    dateOfBirth: z.string().optional(),
    country: z.string().min(2),
    preferredArrival: z.string().min(1),
    additionalInfo: z.string().optional(),
});

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const result = applicationSchema.safeParse(req.body);
    if (!result.success) {
        return res.status(400).json({
            error: "Validation failed",
            issues: result.error.issues,
        });
    }

    const { fullName, email, phone, age, dateOfBirth, country, preferredArrival, additionalInfo } = result.data;

    try {
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST || "smtp.gmail.com",
            port: Number(process.env.EMAIL_PORT) || 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `"Southampton Programme" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            replyTo: email,
            subject: `[Southampton Summer] New Application from ${fullName}`,
            html: `
        <div style="font-family:'Open Sans',sans-serif;max-width:600px;margin:0 auto;padding:20px;">
          <h2 style="color:#1A73E8;">New Programme Application</h2>
          <hr style="border:none;border-top:2px solid #FFB300;margin:16px 0;" />
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Age:</strong> ${age}</p>
          ${dateOfBirth ? `<p><strong>Date of Birth:</strong> ${dateOfBirth}</p>` : ""}
          <p><strong>Country:</strong> ${country}</p>
          <p><strong>Preferred Arrival:</strong> ${preferredArrival}</p>
          ${additionalInfo ? `
            <p><strong>Additional Info:</strong></p>
            <div style="background:#f9fafb;padding:16px;border-radius:8px;white-space:pre-wrap;">${additionalInfo}</div>
          ` : ""}
          <hr style="border:none;border-top:2px solid #e5e7eb;margin:16px 0;" />
          <p style="color:#9ca3af;font-size:12px;">Sent from Southampton Summer Programme application form</p>
        </div>
      `,
        });

        return res.status(200).json({ success: true });
    } catch (error) {
        console.error("Email send error:", error);
        return res.status(500).json({ error: "Failed to send email" });
    }
}
