import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";
import path from 'path';


interface Product {
  title: string;
  img: string;
  price: number;
  quantity: number;
  slug: string;
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

    const grandTotal = formdata.cartValues.reduce(
      (total: any, product: any) => total + product.price * product.quantity,
      0
    );


    const productListHTML = `
    <table style="width: 100%; border-collapse: collapse;">
      <tr>
      <th style="border-bottom: 2px solid #000; text-align: left;">Image</th>
        <th style="border-bottom: 2px solid #000;  text-align: left;">Title</th>
        <th style="border-bottom: 2px solid #000;  text-align: left;">Quantity</th>
        <th style="border-bottom: 2px solid #000;  text-align: left;">Price</th>
      </tr>
      ${formdata.cartValues
        .map((product: Product) => {
          const totalPrice = product.price * product.quantity; 
    
          return `
            <tr class="product-row">
            <td style="border-bottom: 1px solid #ccc; padding: 8px; text-align: left;">
            <img src="cid:${product.slug}" alt="Image" style="max-width: 50px;">
          </td>
              <td style="border-bottom: 1px solid #ccc; padding: 8px; text-align: left;">${product.title}</td>
              <td style="border-bottom: 1px solid #ccc; padding: 8px; text-align: left;">${product.quantity}</td>
              <td style="border-bottom: 1px solid #ccc; padding: 8px; text-align: left;">$${totalPrice}</td>
            </tr>
          `;
        })
        .join("")}
      <tr>
        <td colspan="4" style="text-align: right; padding: 8px; margin-right:15px;"><strong>Grand Total: $${grandTotal}</strong></td>
      </tr>
    </table>
    `;
    
    

  //   <td style="border-bottom: 1px solid #ccc; padding: 8px; text-align: center;">
  //   <img src="${product.title}" alt="Image" style="max-width: 50px;">
  // </td>

    const mailOptionToYou = {
      from: formdata.email,
      // from: formdata.email,
      to: "PHILLIE BOP MUSIC <developer@innovativemojo.com>,projectlead@innovativemojo.com,bop@philliebopmusic.com",
      // to: "developer@innovativemojo.com",
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
          <div style="text-align: center; font-size:25px; padding: 8px;"> Order Details </div>
          ${productListHTML}
    </ul>
      `,
      attachments: formdata.cartValues.map((product: any) => ({
        filename: `${product.title}.png`,
        path: path.join(process.cwd(), 'public', 'imgs', 'merch', product.pathnode),
        cid: product.slug
      }))
    };

    const mailOptionToUser = {
      from: "PHILLIE BOP MUSIC <developer@innovativemojo.com>, ",

      to: formdata.email,
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
