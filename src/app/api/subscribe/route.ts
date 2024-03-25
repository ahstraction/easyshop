import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

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
      to: "developer@innovativemojo.com,projectlead@innovativemojo.com,bop@philliebopmusic.com",
      subject: "New Contact Form Submission",
      html: `
        <h3>Email Subscription</h3>
        <ul>
         
          <li>Email: ${email}</li> 
          
        </ul>
      `,
    };

    // Email options for sending thank you email to the user
    const mailOptionToUser = {
      from: "PHILLIE BOP MUSIC <developer@innovativemojo.com >",
      to: email,
      subject: "Thank You for Subscribing",
      html: `
        <p>Thank you for subscribing. </p>
        <p>Best Regards,</p>
        <p>PHILLIE BOP MUSIC</p>
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
