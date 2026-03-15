import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, subject, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email to JC
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: email,
      subject: subject ? `[Portfolio] ${subject}` : `[Portfolio] New message from ${name}`,
      html: `
        <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;background:#0a0a0f;color:#f1f5f9;padding:32px;border-radius:12px;">
          <div style="border-bottom:1px solid rgba(99,102,241,0.3);padding-bottom:20px;margin-bottom:24px;">
            <h2 style="color:#818cf8;margin:0;font-size:22px;">New Portfolio Message</h2>
          </div>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#94a3b8;font-size:13px;width:80px;">From</td><td style="padding:8px 0;color:#f1f5f9;font-weight:600;">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#94a3b8;font-size:13px;">Email</td><td style="padding:8px 0;"><a href="mailto:${email}" style="color:#818cf8;">${email}</a></td></tr>
            ${subject ? `<tr><td style="padding:8px 0;color:#94a3b8;font-size:13px;">Subject</td><td style="padding:8px 0;color:#f1f5f9;">${subject}</td></tr>` : ""}
          </table>
          <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:10px;padding:20px;margin-top:20px;">
            <p style="margin:0;line-height:1.7;color:#cbd5e1;font-size:15px;">${message.replace(/\n/g, "<br/>")}</p>
          </div>
          <p style="margin-top:24px;font-size:12px;color:#4b5563;">Sent via your portfolio contact form.</p>
        </div>
      `,
    });

    // Auto-reply to sender
    await transporter.sendMail({
      from: `"JC Dizon" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Thanks for reaching out!",
      html: `
        <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;background:#0a0a0f;color:#f1f5f9;padding:32px;border-radius:12px;">
          <h2 style="color:#818cf8;margin:0 0 16px;">Hey ${name}, thanks for reaching out! 👋</h2>
          <p style="color:#94a3b8;line-height:1.7;">I received your message and will get back to you as soon as possible, usually within 24–48 hours.</p>
          <div style="background:rgba(99,102,241,0.08);border:1px solid rgba(99,102,241,0.2);border-radius:10px;padding:16px;margin:24px 0;">
            <p style="margin:0;font-size:13px;color:#818cf8;font-weight:600;">Your message:</p>
            <p style="margin:8px 0 0;color:#cbd5e1;font-size:14px;line-height:1.6;">${message.replace(/\n/g, "<br/>")}</p>
          </div>
          <p style="color:#94a3b8;font-size:14px;">In the meantime, feel free to check out my work on <a href="https://github.com/johncarlo-dizon" style="color:#818cf8;">GitHub</a>.</p>
          <p style="margin-top:24px;color:#6b7280;font-size:13px;">— JC Dizon<br/>Full Stack & Mobile Developer</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Mail error:", err);
    return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 });
  }
}