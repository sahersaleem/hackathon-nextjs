"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Input } from "./ui/input";
import { useCart } from "./CartContext";

const PaymentInfo = ({ ids , totalAmount}: { ids: string[] , totalAmount:number  }) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [postalAddress, setPostalAddress] = useState<string>("");

  const [country, setCountry] = useState<string>("");
  const [street, setStreet] = useState<string>("");
  const {clearProduct}=useCart()

  const products = ids;
  console.log(products);


  


  const handleSubmit = async(e: any) => {
    e.preventDefault();

    const data = {
      name,
      email,
      city,
      postalAddress,
      country,
      street,
      products,
      totalAmount
    };
    try {
     const res =  await axios.post("/api/checkout", data);
     console.log(res)
     if(res.data.url){
        window.location=res.data.url
        clearProduct()

     }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <div className="shadow-md px-4 py-3">
      <h1 className="font-poppins text-3xl text-center font-bold mb-7">
        Payment Information
      </h1>

      <form onSubmit={handleSubmit}>
        <div className="space-y-2">
          <Input
            placeholder="name"
            value={name}
            name="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <Input
            placeholder="email"
            value={email}
            name="email"
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <div className="flex gap-x-2">
            <Input
              placeholder="city"
              value={city}
              name="city"
              onChange={(e) => {
                setCity(e.target.value);
              }}
            />
            <Input
              placeholder="postal address"
              value={postalAddress}
              name="postalAddress"
              onChange={(e) => {
                setPostalAddress(e.target.value);
              }}
            />
          </div>
          <Input
            placeholder="street address"
            value={street}
            name="street"
            onChange={(e) => {
              setStreet(e.target.value);
            }}
          />
          <Input
            placeholder="country"
            value={country}
            name="country"
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          />
          <input
            name="products"
            value={products.join(",")}
            className="hidden"
            placeholder="abc"
            readOnly
          />
          <div className="flex items-center justify-center">
            <button className="btn !py-2 !px-2 mt-4" type="submit">
              Continue to payment
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PaymentInfo;
