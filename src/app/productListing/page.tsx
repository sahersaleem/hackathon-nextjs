import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Wrapper from "@/components/Wrapper";
import { FaAngleDown } from "react-icons/fa";
import { Card } from "@/components/Listings";
import Image from "next/image";
const page = () => {
  return (
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
          <div className="flex gap-x-[12px]">
            <p className="medium">
              Category <FaAngleDown className="inline-block" />
            </p>
            <p className="medium">
              ProductType <FaAngleDown className="inline-block" />
            </p>
            <p className="medium">
              Price <FaAngleDown className="inline-block" />
            </p>
            <p className="medium">
              Brand <FaAngleDown className="inline-block" />
            </p>
          </div>
          <div className="flex gap-x-[16px]">
            <p className="medium">{`Sorted By :`}</p>
            <p className="medium">
              Date added <FaAngleDown className="inline-block" />
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-10 pb-10">
            <Card image="/images/product1.png" name="The Dandy chair" price="£125"/>
            <Card image="/images/item1.png" name="The Dandy chair" price="£125"/>
            <Card image="/images/item2.png" name="The Dandy chair" price="£125"/>
            <Card image="/images/item3.png" name="The Dandy chair" price="£125"/>
            <Card image="/images/item4.png" name="The Dandy chair" price="£125"/>
            <Card image="/images/item6.png" name="The Dandy chair" price="£125"/>
            <Card image="/images/product2.png" name="The Dandy chair" price="£125"/>
            <Card image="/images/product1.png" name="The Dandy chair" price="£125"/>
            <Card image="/images/product1.png" name="The Dandy chair" price="£125"/>
            <Card image="/images/product1.png" name="The Dandy chair" price="£125"/>
            <Card image="/images/product1.png" name="The Dandy chair" price="£125"/>
            <Card image="/images/product1.png" name="The Dandy chair" price="£125"/>
        </div>
      </Wrapper>
      <Footer/>
    </div>
  );
};

export default page;
