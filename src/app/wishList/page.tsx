"use client";
import React, { useEffect, useState } from "react";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import CartContext, { useCart } from "@/components/CartContext";
import { IProduct } from "@/app/productListing/[product_Id]/page";
import { client } from "@/sanity/lib/client";
import { Card } from "@/components/Listings";
import { ICard } from "@/components/Listings";
import { SkeletonCard } from "@/components/SkeletonCard";
import { Toaster } from "react-hot-toast";

const WishList = () => {
  const { wishList } = useCart();
  const [products, setProducts] = useState<ICard[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getCartProducts = async () => {
      setLoading(true);
      const getProducts = await client.fetch(
        `*[_type=="product" && _id in ${JSON.stringify(wishList)}]`
      );
    if(getProducts.length>0){
        setProducts(getProducts);
    }
    
      setLoading(false);
    };

    getCartProducts();
  }, [wishList]);

  return (
    <div className="mt-20">
        <Toaster position="bottom-right"/>
      <div className="flex xs:justify-center flex-wrap gap-x-4 gap-y-10 pb-10">
        {loading &&
          Array.from({ length: 20 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        {products &&
          products.map((item, index) => (
            <Card
              key={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
              href={`/productListing/${item._id}`}
              height={400}
              _id={item._id}
            />
          ))}
      </div>
    </div>
  );
};

export default WishList;
