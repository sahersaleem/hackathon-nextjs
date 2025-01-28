"use client";
import { SignOutButton } from "@clerk/nextjs";
import { X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { FaCross } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { useAnnotationColor } from "sanity";

const Dashbord = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);


 const handleOpen = ()=>{
    setIsOpen(false)
 }



  return (
    <div className={`border-white/30  border-r-2 shadow-lg rounded-lg w-full   py-4  ${isOpen?"lg:max-w-[300px] lg:min-w-[400px]  xs:min-w-full w-full px-2 transition-all duration-500 ease-in-out xs:absolute lg:relative":"xs:w-10 lg:w-20 px-2 transition-all duration-500 ease-in-out"} h-full z-50 bg-black`}>
      <div className="flex justify-between items-center">
        <h1 className={`!text-off-white xs:text-lg lg:text-2xl ${!isOpen?"hidden":"inline-block"}`}>Dashboard</h1>
        {
            isOpen?<X  onClick={()=>{setIsOpen(!isOpen)}} className="animate-out"/>:<FaBars className="text-2xl animate-pulse" onClick={()=>{setIsOpen(!isOpen)}} />
        }
        
      </div>

      <div className={` ${isOpen ? "flex":"hidden"} gap-y-5 flex-col text-2xl justify-center items-center mt-20`}>
      <Link href={'/admin'} onClick={handleOpen}>Dashboard</Link>

        <Link href={'/admin/products'} onClick={handleOpen}>Products</Link>
        <Link href={'/admin/orders'} onClick={handleOpen}>Orders</Link>
       <SignOutButton/>
      </div>
    </div>
  );
};

export default Dashbord;
