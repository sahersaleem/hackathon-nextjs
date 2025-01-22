"use client";

import Navbar from "@/components/Navbar";
import Wrapper from "@/components/Wrapper";
import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { client } from "@/sanity/lib/client";
import CartContext from "@/components/CartContext";
import { IProduct } from "../productListing/[product_Id]/page";

interface IOrder {
  _id: string;
  products: string[];
  user: {
    name: string;
    email: string;
  };

  totalAmount: number;
  _createdAt: string;
}

const Page = () => {
  const userdata = useUser();
  const [order, setOrder] = useState<IOrder[]>([]);
  const [ids, setIds] = useState<string[]>();
  const [productData, setProductData] = useState<IProduct[]>([]);
  const email = userdata?.user?.emailAddresses;

  useEffect(() => {
    const getUserOrders = async () => {
      if (email) {
        const userEmail = email![0].emailAddress;
        const orderDataFetchFromSanity = await client.fetch(
          `*[_type=="order" && user.email==$userEmail]`,
          { userEmail }
        );

        setOrder(orderDataFetchFromSanity);
      }
    };

    getUserOrders();
  }, [email]);

  useEffect(() => {
    const getCartProducts = async () => {

      if(order.length===0) return;
      const product = order.flatMap((item) => item.products);
      setIds(product);
      const getProducts = await client.fetch(
        `*[_type=="product" && _id in ${JSON.stringify(product)}]`
      );

      setProductData(getProducts);

      console.log(productData);
    
    };

    getCartProducts();
  },[order]);

  return (
    <CartContext>
      <div className="w-full h-screen">
        <Wrapper>
          <Navbar />
          <div>
            <h1 className="text-center mt-10">Your Orders</h1>
          </div>
          <div className="flex gap-10 flex-wrap justify-center items-center mt-20" >
            {order.map((item) => (
              <div
                className="min-w-[300px] max-w-[400px] bg-gray-50  border-blue border-[1px] rounded-md px-3 py-2 shadow-xl min-h-[300px] space-y-4 "
                key={item._id}
              > 
                <p>Date:{item._createdAt}</p>
                  <h1 className="!text-xl">Products</h1>
                <ul>
                  {item.products.map((id, index) => (
                    <li key={index}>
                      {productData.find((p) => p._id === id)?.name}
                    </li>
                  ))}
                </ul>

                {
                <h2>Paid Amount : {item.totalAmount}</h2>
                }
              </div>
            ))}
          </div>
        </Wrapper>
      </div>
    </CartContext>
  );
};

export default Page;
