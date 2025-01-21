"use client";

import React, {  useContext, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import CartContext, { cartContext, useCart }  from "@/components/CartContext";
import {  Toaster } from "react-hot-toast";

interface IProduct {
  name: string;
  description: string;
  price: number;
  image: string;
  _id:string
  category: {
    name: string;
    slug: string;
  };
  features: string[];
}

function DetailedPageSkeleton() {
  return (
    <div className="w-full max-w-7xl mx-auto h-screen flex justify-center items-center pb-20 gap-y-11 xs:flex-col lg:flex-row gap-x-44 ">
      <div className="mt-10 lg:w-[50%] xs:px-10 lg:px-0">
        <Skeleton className="w-[500px] h-[500px]" />
      </div>

      <div className="lg:w-[50%] flex flex-col gap-y-4 xs:px-10 lg:px-0">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="btn" />
      </div>
    </div>
  );
}

const Page = () => {
  const [productData, setproductData] = useState<IProduct | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { product_Id } = useParams();

  const {addProducts} = useCart()




  useEffect(() => {
    const getDataOfSpecificProducts = async () => {
      setLoading(true);
      const query = `*[_type=="product" && _id==$id][0]`;
      const params = { id: product_Id };

      try {
        const fetchData = await client.fetch(query, params);
        setproductData(fetchData);
        setLoading(false);
      } catch (error: any) {
        console.log("error ocuured while fetching data from sanity");
      } finally {
        setLoading(false);
      }
    };

    getDataOfSpecificProducts();
  }, [product_Id]);

  return (
    <CartContext>
 
    <div className="w-full max-w-7xl mx-auto h-screen flex justify-center items-center pb-20 gap-y-11 xs:flex-col lg:flex-row">
      <Toaster position="bottom-right"/>
      {loading && (
        <div>
          <DetailedPageSkeleton />
        </div>
      )}

      {productData && (
        <>
          <div className="mt-10 lg:w-[50%] xs:px-10 lg:px-0">
            <Image
              src={productData?.image}
              alt={productData?.name}
              width={500}
              height={500}
              className="object-center object-cover max-h-[500px]"
            />
          </div>
          <div className="lg:w-[50%] flex flex-col gap-y-4 xs:px-10 lg:px-0">
            <h1 className="font-satoshi-display !text-5xl">
              {productData.name}
            </h1>
            <p className="para text-black text-xl ">
              {productData.description}
            </p>
            <p className="para text-black">
              <span className="font-satoshi-display">Category:</span>
              {productData.category.name}
            </p>
            <p className="font-satoshi-display text-2xl">
              {productData.price} Rupees Only.
            </p>

            <button className="btn lg:w-[30%]" onClick={()=>{addProducts(productData._id)}}>Add to Cart</button>
          </div>
        </>
      )}
    </div>
    </CartContext>
  );
};

export default Page;
