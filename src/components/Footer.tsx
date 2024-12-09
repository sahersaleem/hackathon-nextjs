import React from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-[#2A254B] text-white">
      <Wrapper>
        <div className="xs:h-auto lg:h-[380px] flex xs:flex-wrap xs:p-10 lg:p-0 xs:gap-x-20 lg:gap-x-0 lg:justify-around lg:items-center border-[#4E4D93] border-b xs:items-start ">
          <div className="flex flex-col gap-[12px] xs:mb-10">
            <h2>Menu</h2>
            <Link href={"/"}>New arrivals</Link>
            <Link href={"/"}>Best sellers</Link>
            <Link href={"/"}>Recently viewed</Link>
            <Link href={"/"}>Popular this week</Link> 
            <Link href={"/"}>All products</Link>
          </div>

          <div className="flex flex-col gap-[12px] xs:mb-10">
            <h2 className="text-[16px] leading-[19.66px]">Categories</h2>
            <Link href={"/"}>Crockery</Link>
            <Link href={"/"}>Furniture</Link>
            <Link href={"/"}>Homeware</Link>
            <Link href={"/"}>Plant pots</Link>
            <Link href={"/"}>Chair</Link>
            <Link href={"/"}>Crockery</Link>
          </div>
          <div className="flex flex-col gap-[12px] xs:mb-10">
            <h2>Our company</h2>
            <Link href={"/"}>About</Link>
            <Link href={"/"}>Vacancies</Link>
            <Link href={"/"}>Contact us</Link>
            <Link href={"/"}>Privacy</Link>
            <Link href={"/"}>Return policy</Link>
          </div>
          <div className="flex flex-col gap-[12px] xs:mb-10">
            <h2 className="xs:text-center lg:text-left">Join our mailing list</h2>
            <div className="xs:flex lg:block flex-col"> <input
              placeholder="your@email.com"
              className="xs:w-[270px] lg:w-[327px] px-7 hover:outline-none bg-[#4A4566] py-4"
            />
            <button className="btn !bg-white  text-blue xs:mt-4 lg:mt-0">Sign Up</button></div>
           
          </div>
        </div>
        <div className="flex justify-between p-3">

<p className="text-[14px] leading-[18.9px]  font-normal">Copyright 2022 Avion LTD</p>
             <div className="flex gap-[24px] ">
           <FaLinkedin/>
           <FaFacebookSquare/>
           <FaInstagram/>
           <FaPinterest/>
           <FaTwitter/>
             </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Footer;
