"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Wrapper from "@/components/Wrapper";
import { Card } from "@/components/Listings";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { SkeletonCard } from "@/components/SkeletonCard";
import CartContext from "@/components/CartContext";
import { Toaster } from "react-hot-toast";
import { ICard } from "@/components/Listings";
import NextNProgress from "nextjs-progressbar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SearchIcon } from "lucide-react";

export interface ICategory {
  name: string;
  _id: string;
}

const Page = () => {
  const [products, setProducts] = useState<ICard[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [categories, setCategories] = useState<ICategory[] | null>(null);
  const [category, setCategory] = useState<string>("");
  const [name , setName] = useState<string>("")
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);

      const productsFetchFromSanity = await client.fetch(
        `*[_type=="product" && slug == ^.slug] | order(_createdAt desc)[50...100]`
      );

      const fetchCategoriesFromSanity =
        await client.fetch(`*[_type=="category"]`);
      setCategories(fetchCategoriesFromSanity);

      setProducts(productsFetchFromSanity);
      setLoading(false);
    };

    getProducts();
  }, []);

  useEffect(() => {
    const getProductsFilteredVyCategory = async () => {
      setLoading(true)
      if (category) {
      
        const productDataAccordingToCategory = await client.fetch(
          `*[_type=="product" && slug == ^.slug && category.name=="${category}" && defined(image)] | order(_createdAt desc)[50...100]`
        );
    
        setLoading(false)
        setProducts(productDataAccordingToCategory);
      }
    if(name){
      const productDataAccordingToName = await client.fetch(
        `*[_type=="product" && name == "${name}" && defined(image)]`
      );
     setProducts(productDataAccordingToName);
      setLoading(false)
    }

    };
    getProductsFilteredVyCategory();
  }, [category ,  name]);

  return (
    <CartContext>
      <NextNProgress
        color="#000000"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <Toaster position="bottom-right" />
      <div className="bg-white w-full h-screen text-black font-clash-display">
        <Navbar />
        <div className="w-full mx-auto relative">
          <Image
            src={"/images/productmain.png"}
            height={209}
            width={1440}
            alt="p"
            className="h-[209px] w-full object-cover object-center"
          />
          <h1 className="top-[123px] left-[80px] text-white absolute">
            All products
          </h1>
        </div>
        <Wrapper>
          <div className="flex justify-between px-[20px] py-[24px] ">
            <div className="flex xs:justify-around items-center lg:gap-x-[12px] xs:w-full lg:w-auto xs:flex-col lg:flex-row gap-y-6">
              <Select
                onValueChange={(e) => {
                  setCategory(e);
                }}
              >
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Search by category" />
                </SelectTrigger>
                <SelectContent>
                  {categories?.map((cat) => (
                    <SelectItem key={cat._id} value={cat.name}>
                      {cat.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <div className="flex border-blue border-[1px] py-1 px-2 rounded-lg outline-none">
                <input
                  placeholder="Search by Name"
                  className="text-sm outline-none"
                  value={name}
                  onChange={(e)=>{setName(e.target.value)}}
                />{" "}
                <SearchIcon className="text-blue/70" />
              </div>
            </div>
          </div>
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
        </Wrapper>
        <Footer />
      </div>
    </CartContext>
  );
};

export default Page;
