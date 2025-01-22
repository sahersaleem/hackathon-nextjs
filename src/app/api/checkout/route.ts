import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { IProduct } from "@/app/productListing/[product_Id]/page";
export async function POST(req: Request) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

  try {
    const request = await req.json();
    const {
      name,
      email,
      city,
      postalAddress,
      country,
      street,
      products,
      totalAmount,
    } = request;
   console.log(products)
    const uniquProducts = [...new Set(products)]
    console.log(uniquProducts)
    const productsData = await client.fetch(
        `*[_type=="product" && _id in $uniquProducts]`,
        { uniquProducts }
    );
   console.log(productsData)
    const items = [];
    for (const p of uniquProducts) {
      const data = productsData.find((item:IProduct) => item._id === p);
        console.log(data.name , "data")
      if (!data) continue;

      const quantity = products.filter((item:string) => item === p)?.length;
      console.log(quantity,"quanity");
      
      items.push({
        quantity,
        price_data: {
          currency: "USD",
          product_data: { name: data?.name },
          unit_amount: Math.round(data.price * 100),
        },
      });
      console.log(items , "items")
    }

    
    const order = await client.create({
      _type: "order",
      user: {
        name: name,
        email: email,
        city: city,
        postalAddress,
        country,
        street,
      },
      products: products,
      totalAmount,
    });

    
    console.log("order created");
   
    const session = await stripe.checkout.sessions.create({
      line_items:items,
      mode: "payment",
      customer_email: email,
      success_url: `${process.env.NEXT_PUBLIC_PUBLIC_URL}/`,
      cancel_url: `${process.env.NEXT_PUBLIC_PUBLIC_URL}/cart?canceled=1`,
      metadata: { orderId: order._id.toString() },
    });
    
    console.log(session.url)
    return NextResponse.json({ url: session.url } );
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}
