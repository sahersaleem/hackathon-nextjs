import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import buffer from "micro";
const stripe = require("stripe")(
  "sk_test_51QY9hrHGQ4UEkiPhIFyd7UtMKfKIPPYuJtJGsTZ63CPmq5iHeejxLoOIvyBuA4bHhFvGBVVV93dN4CtkCA5qqPIV00JvNksT8i"
);

const endpointSecret = "whsec_TllQPshTgWZxZL0a3vMHCPeSxhmRKKQX";


export async function POST(request: NextRequest) {
  const sig = request.headers.get("stripe-signature");
  const rawBody = await request.text();

  let event;

  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, endpointSecret);

    switch (event.type) {
      case "checkout.session.completed":
        const session = event.data.object;
        console.log(session);
        
        const email = session.customer_email;
        const orderId = session.id;
        const amount = session.amount_total;
        console.log(email, orderId, amount);

        await sendConfirmationEmail(email, orderId, amount);
        break;

      default:
        console.log(`unhandled type event `);
        return NextResponse.json({ received: true });
    }
  } catch (err) {
    return NextResponse.json({ status: 500 });
  }

  async function sendConfirmationEmail(
    email: string,
    id: string,
    amount: number
  ) {
    console.log("email is running");
    const transporter = nodemailer.createTransport({
      service: "gmail", // Using Gmail service for email sending
      auth: {
        user: "saleemsaba281@gmail.com", // Your Gmail address
        pass: "qodxzudcrnjfsqri", // Your Gmail password or app password
      },
    });

    const mailOptions = {
      from: "saleemsaba281@gmail.com",
      to: email,
      subject: "Order Confirmation",
      text:`<div> <h1>Thank you for your purchase!</h1> <p>Your order ID is ${id} and the total amount is $${amount}.</p> <p> Your order will sent to your address in 2 days</div>`
    };

    try {
      await transporter.sendMail(mailOptions);
      return NextResponse.json({ status: 200 });
    } catch (error) {
      return NextResponse.json({ message: "error ocurred while sending mil" });
    }
  }

  return NextResponse.json({status:200})
}
