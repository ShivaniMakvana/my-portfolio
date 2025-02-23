import { NextResponse } from "next/server";
import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(req: Request) {
  try {
    const { email, subject, message } = await req.json();
    console.log("SENDGRID_API_KEY:", process.env.SENDGRID_API_KEY);
    await sendgrid.send({
      to: "shivani105027@gmail.com", // Replace with your actual email
      from: "shivanimakvana2@gmail.com", // This must be verified in SendGrid
      subject: `New Contact Form Message: ${subject}`,
      text: `From: ${email}\n\nMessage:\n${message}`,
    });

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email sending failed:", error);
    return NextResponse.json(
      { message: "Email sending failed", error },
      { status: 500 }
    );
  }
}
