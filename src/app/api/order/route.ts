import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";
interface Product {
  title: string;
  price: number;
}

export async function POST(request: NextRequest) {
  try {
    const formdata = await request.json();
    console.log(formdata); // Log formData to check its structure and values

    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: "developer@innovativemojo.com",
        pass: "zwby clsj qwwa joai",
      },
    });

    const productListHTML = Object.keys(formdata).filter(key => key.startsWith('product')).map(key => {
      const value = key.includes('_price') ? `$${formdata[key]}` : formdata[key];
      return `<li>${key}: ${value}</li>`;
    }).join('');


    const mailOptionToYou = {
      from: formdata.email,
      to: "developer@innovativemojo.com,projectlead@innovativemojo.com,Bop@phillibopmusic.com",
      subject: " order",
      html: `
        <h3>New Contact Form Submission</h3>
        <ul>
          <li>firstName: ${formdata.firstName}</li>
          <li>lastName: ${formdata.lastName}</li>
          <li>companyName: ${formdata.companyName}</li>
          <li>email: ${formdata.email}</li>
          <li>country: ${formdata.country}</li>
          <li>address: ${formdata.address}</li>
          <li>city: ${formdata.city}</li>
          <li>state: ${formdata.state}</li>
          <li>zipCode: ${formdata.zipCode}</li>
          <li>phoneNumber: ${formdata.number}</li>
          <li>additionalInfo: ${formdata.additionalInfo}</li>
          ${productListHTML}
    </ul>
      `,
    };

    const mailOptionToUser = {
      from: "PHILLIE BOP MUSIC <developer@innovativemojo.com>",

      to:formdata.email,
      subject: "Your order is placed",
      html: `
        <h3>Dear ${formdata.firstName} ${formdata.lastName},</h3>
        <p>Thank you for placing order. </p>
        <p>Best Regards,</p>
        <p>PHILLIE BOP MUSIC</p>
      `,
    };

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