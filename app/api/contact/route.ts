import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

/**
 * POST /api/contact
 * 
 * This API route handles contact form submissions and sends emails via Nodemailer.
 * 
 * How it works:
 * 1. Receives form data (name, email, message) from the frontend
 * 2. Validates the input data
 * 3. Creates a Nodemailer transporter using Gmail SMTP
 * 4. Sends an email to sara.ramazani.dev@gmail.com with the form submission
 * 5. Returns success or error response
 * 
 * Security:
 * - Email credentials are stored in environment variables (never exposed to frontend)
 * - Input validation prevents malicious data
 * - Rate limiting should be added in production
 */
export async function POST(request: NextRequest) {
  try {
    // Parse the request body to get form data
    const body = await request.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Get email credentials from environment variables
    // These should be set in your .env.local file
    const smtpEmail = process.env.SMTP_EMAIL;
    const smtpPassword = process.env.SMTP_PASSWORD;
    const recipientEmail = process.env.RECIPIENT_EMAIL || "sara.ramazani.dev@gmail.com";

    // Check if email credentials are configured
    if (!smtpEmail || !smtpPassword) {
      console.error("SMTP credentials not configured");
      return NextResponse.json(
        { error: "Email service not configured. Please contact the site administrator." },
        { status: 500 }
      );
    }

    // Create Nodemailer transporter
    // This configures the email service (Gmail in this case)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: smtpEmail, // Your Gmail address
        pass: smtpPassword, // Your Gmail app password (not regular password)
      },
    });

    // Email content that will be sent to you
    const mailOptions = {
      from: smtpEmail, // Sender address
      to: recipientEmail, // Your email address where messages will be received
      replyTo: email, // Allows you to reply directly to the sender
      subject: `Portfolio Contact Form: Message from ${name}`, // Email subject
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7c3aed;">New Contact Form Submission</h2>
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; background-color: white; padding: 15px; border-radius: 4px; margin-top: 10px;">${message}</p>
          </div>
          <p style="color: #6b7280; font-size: 14px; margin-top: 20px;">
            This message was sent from your portfolio contact form.
          </p>
        </div>
      `,
      // Plain text version (fallback for email clients that don't support HTML)
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}

Message:
${message}

---
This message was sent from your portfolio contact form.
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return success response
    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    // Log error for debugging (in production, use a proper logging service)
    console.error("Error sending email:", error);
    
    // Return generic error message (don't expose internal errors to users)
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}

