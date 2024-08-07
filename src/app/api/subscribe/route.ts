import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";
import path from 'path';
// import img from "../../../../public/imgs/merch/jene.png"

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: "mysterycougar365@gmail.com",
        pass: "oyvd gbcd navv cpxr",
      },
    });

    // Email options for sending to your own inbox
    const mailOptionToYou = {
      from: email,
      to: "mysterycougar365@gmail.com",
      subject: "New Contact Form Submission",
      html: `
     
        <h3>Email Subscription</h3>
        <ul>
         
          <li>Email: ${email}</li> 
          
        </ul>
      `,
      // attachments: [{
      //   filename: 'jene.png',
      //   path: path.join(process.cwd(), 'public', 'imgs', 'merch', 'jene.png'),
      //   cid: 'jene'
      // }]
    };

    // Email options for sending thank you email to the user
    const mailOptionToUser = {
      from: "mysterycougar365@gmail.com",
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
