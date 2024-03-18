import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { fname, lname, email, phone, message } = await request.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: "developer@innovativemojo.com",
        pass: "zwby clsj qwwa joai",
      },
    });

    // Email options for sending to your own inbox
    const mailOptionToYou = {
      from: email,
      to: "developer@innovativemojo.com",
      subject: " Contact Form Submission",
      html: `
        <h3>New Contact Form Submission</h3>
        <ul>
          <li>First Name: ${fname}</li>
          <li>Email: ${email}</li> 
          <li>Number: ${phone}</li> 
          <li>Message: ${message}</li> 
        </ul>
      `,
    };

    // Email options for sending thank you email to the user
    const mailOptionToUser = {
      from: "PHILLIE-BOP MUSIC <developer@innovativemojo.com >",

      to: email,
      subject: "Thank You for Contacting Us",
      html: `
        <h3>Dear ${fname} ${lname},</h3>
        <p>Thank you for contacting us. We have received your message and will get back to you as soon as possible.</p>
        <p>Best regards,</p>
        <p>EEE Corp,</p>
      `,
    };

    // Send emails
    await transporter.sendMail(mailOptionToYou);
    await transporter.sendMail(mailOptionToUser);

    return NextResponse.json(
      { message: "Email Sent Successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to Send Email" },
      { status: 500 }
    );
  }
}