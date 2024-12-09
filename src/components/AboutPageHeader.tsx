'use client'
import React from "react";
import { IoCartOutline, IoClose } from "react-icons/io5";
import Wrapper from "./Wrapper";
import Link from "next/link";
import { FaRegCircleUser } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa";

const AboutPageHeader = () => {

  return (
    <div className="w-full">
      <div className="bg-[#2A254B] py-4 text-white ">
        <Wrapper>
          <div className="flex justify-between">
            <h6 className="!leading-[18.9px] text-center text-white lg:ml-[400px] font-satoshi-display font-light">
              Free delivery on all orders over £50 with code easter checkout
            </h6>
            <div className="flex w-60  xs:justify-center xs:items-center lg:justify-end lg:items-end">
              {" "}
              <IoClose className="inline-block" />
            </div>
          </div>
        </Wrapper>
      </div>
      <Wrapper>
        <div className="flex lg:justify-between xs:px-5 lg:py-5  ">
          <h1 className="text-[24px] leading-[29px] font-normal font-clash-display text-[#22202E]">
            Avion
          </h1>
          <div className="flex items-center lg:justify-between w-96 xs:justify-end">
          
            <div className={`xs:hidden lg:flex flex-row  gap-x-[32px]`}>
              <Link href={"/"} className="medium text-[#726E8D]">
                About us
              </Link>
              <Link href={"/"} className="medium text-[#726E8D]">
                Contact
              </Link>
              <Link href={"/"} className="medium text-[#726E8D]">
                Blogs
              </Link>
            </div>
            <div className="flex gap-x-3 text-[20px] xs:hidden lg:flex ">
              <IoCartOutline />
              <FaRegCircleUser />
              <CiSearch />
             

            </div> 
          </div>
          <FaBars className="xs:inline-block lg:hidden"/>
        </div>
        </Wrapper>
        <div className="w-full flex items-center justify-center gap-x-[44px] p-6 bg-off-white">
        <Link href={"/"} className="link">Plant pots</Link>
        <Link href={"/"} className="link">Ceramics</Link>
        <Link href={"/"} className="link">Tabels</Link>
        <Link href={"/"} className="link xs:hidden lg:block">Chairs</Link>
        <Link href={"/"} className="link xs:hidden lg:block">Crockery</Link>
        <Link href={"/"} className="link xs:hidden lg:block">tableware</Link>
        <Link href={"/"} className="link xs:hidden lg:block">Cutlery</Link>
     
        </div>
      
    </div>
  );
};

export default AboutPageHeader;
