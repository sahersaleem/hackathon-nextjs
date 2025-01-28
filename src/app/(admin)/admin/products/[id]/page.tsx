"use client";

import React, {  useContext, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import CartContext, {  useCart }  from "@/components/CartContext";
import {  Toaster } from "react-hot-toast";
import CommentAndReviews from "@/components/CommentAndReviews";

export interface IProduct {
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
  const { id } = useParams();





  useEffect(() => {
    const getDataOfSpecificProducts = async () => {
      setLoading(true);
      const query = `*[_type=="product" && _id==$id][0]`;
      const params = { id };

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
  }, [id]);

  return (

 
    <div className="w-full max-w-7xl mx-auto  flex justify-center items-center pb-20 gap-y-11 xs:flex-col lg:flex-row h-auto mt-40">
      <Toaster position="bottom-right"/> 
      {loading && (
        <div>
          <DetailedPageSkeleton />
        </div>
      )}

      {productData && (
        <div>
        <div className="flex xs:flex-col lg:flex-row justify-center items-center">
          <div className="mt-10 lg:w-[50%] xs:px-10 lg:px-0">
            <Image
              src={productData?.image}
              alt={productData?.name}
              width={500}
              height={500}
              className="object-center object-cover max-h-[500px]"
            />
          </div>
          <div className="lg:w-[50%] flex flex-col gap-y-4 xs:px-10 lg:px-0 xs:mt-4 lg:mt-0">
            <h1 className="font-satoshi-display !text-5xl text-off-white">
              {productData.name}
            </h1>
            <p className="para text-white text-xl ">
              {productData.description}
            </p>
            <p className="para text-white">
              <span className="font-satoshi-display">Category:</span>
              {productData.category.name}
            </p>
            <p className="font-satoshi-display text-2xl">
              {productData.price} Rupees Only.
            </p>

          </div>
        
        </div>
   
        </div>
      )}
    </div>

  );
};

export default Page;
