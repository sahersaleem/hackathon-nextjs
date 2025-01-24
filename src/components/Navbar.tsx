"use client";

import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { SignedIn, UserButton, SignedOut, SignInButton } from "@clerk/nextjs";

import Link from "next/link";
import { FaBars, FaHeart, FaShoppingCart } from "react-icons/fa";
import { useCart } from "./CartContext";

const Navbar = () => {
  const [open, setisOpen] = useState<boolean>(false);
  const { cartProducts, wishList } = useCart();
  return (
    <div className="lg:px-10 overflow-x-hidden  ">
      {" "}
      <div className="flex w-full  justify-between p-6 px-10 items-center border-b border-[#000000]">
        <div className="text-[20px] xs:hidden lg:block">
          {" "}
          <CiSearch className="xs:hidden lg:block" />
        </div>

        <h1 className="text-[24px] leading-[29px] font-normal font-clash-display">
          Avion
        </h1>

        <div className="xs:flex  gap-x-4 items-center">
          {" "}
          <CiSearch className="hidden" />{" "}
          <div className="flex gap-x-2 text-[20px] items-center">
            <FaShoppingCart />({cartProducts.length})
            <Link
              href={"/wishList"}
              className="flex justify-center items-center"
            >
              {" "}
              <FaHeart />({wishList.length})
            </Link>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton />
            </SignedOut>
          </div>
          <button
            onClick={() => {
              setisOpen(!open);
            }}
          >
            <FaBars className="xs:block lg:hidden" />
          </button>
        </div>
      </div>
      <div
        className={`w-full flex items-center justify-center gap-x-[44px] p-6 ${open ? "xs:flex-col xs:flex lg:flex-row gap-y-4" : "xs:hidden lg:flex lg:flex-row"}`}
      >
        <Link href={"/"} className="link">
          Plant pots
        </Link>
        <Link href={"/about"} className="link">
          about
        </Link>
        <Link href={"/productListing"} className="link">
          products
        </Link>
        <Link href={"/shopping"} className="link">
          shopping
        </Link>
        <Link href={"/orders"} className="link">
          Orders
        </Link>
        <Link href={"/contact"} className="link">
           Contact
        </Link>
        <Link href={"/"} className="link">
          Cutlery
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
