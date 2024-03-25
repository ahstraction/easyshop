import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";

interface Product {
  title: string;
  price: number;
  quantity: number;
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
    <style>
  .product-row td {
    padding-right: 10px;
  }
</style>
<table>
  <tr>
    <td>Title</td>
    <td>Price</td>
    <td>Quantity</td>
  </tr>
  ${formdata.cartValues
    .map((product: Product) => {
      const totalPrice = product.price * product.quantity; // Calculate total price for each product

      return `
    <tr class="product-row">
        <td>${product.title}:</td>
        <td>$${totalPrice} |</td>
        <td>${product.quantity} |</td>
      </tr>
    `;
    })
    .join("")}
  <tr>
  <td colspan="2"><strong>Grand Total:</strong></td>
  <td><strong>$${grandTotal}</strong></td>
</tr>
</table>
`;

    const mailOptionToYou = {
      from: formdata.email,
      to: "developer@innovativemojo.com,projectlead@innovativemojo.com,bop@philliebopmusic.com",
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
          ${productListHTML}
    </ul>
      `,
    };

    const mailOptionToUser = {
      from: "PHILLIE BOP MUSIC <developer@innovativemojo.com>",

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
