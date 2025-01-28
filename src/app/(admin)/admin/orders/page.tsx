"use client";

import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IProduct } from "@/app/productListing/[product_Id]/page";

interface IOrders {
  products: string[];
  totalAmount: number;
  user: {
    name: string;
    email: string;
    country: string;
    street: string;
  };
  _id: string;
  _createdAt: string;
}

function Page() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [orders, setOrders] = useState<IOrders[]>([]);
  const [products, setProducts] = useState<string[]>();
  const [productsdata, setProductsData] = useState<IProduct[]>([]);
  const itemsPerPage = 7;
  useEffect(() => {
    
    const getAllOrders = async () => {
      const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage - 1;
      try {
        const ordersData = await client.fetch(
          `*[_type=="order"] | order(_createdAt desc) [${start}..${end}]`
        );
        setOrders(ordersData);
        const product = ordersData.flatMap((item: any) => item.products);
        console.log(product);
        setProducts(product);

        console.log(ordersData);
      } catch (error: any) {}
    };

    getAllOrders();
  }, [currentPage]);

  useEffect(() => {
    const getProductsAccordingToIds = async () => {
      const getProducts = await client.fetch(
        `*[_type=="product" && _id in ${JSON.stringify(products)}]`
      );
      console.log(getProducts);
      setProductsData(getProducts);
    };

    getProductsAccordingToIds();
  }, [products]);


 const handleNext = ()=>{
  setCurrentPage(currentPage+1)
 }












  return (
    <div className="w-full">
      <h1 className="!text-off-white mt-4 text-center "> All Orders</h1>
      <div className="flex gap-x-6 px-6 mb-4">
        <button
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={currentPage == 1}
          className="bg-off-white text-black px-4 py-2 rounded-md hover:bg-white transition-all duration-200 ease-in-out border-none"
        >
          Previous
        </button>
        <button
          className="bg-off-white text-black px-4 py-2 rounded-md hover:bg-white transition-all duration-200 ease-in-out border-none"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Order Id</TableHead>
            <TableHead>Customer email</TableHead>
            <TableHead>Customer Address</TableHead>
            <TableHead>Products</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((item) => (
            <TableRow key={item._id}>
              <TableCell className="font-medium">{item._id}</TableCell>
              <TableCell>{item.user.email}</TableCell>
              <TableCell>{item.user.street}</TableCell>
              <TableCell>
                {item.products.map((id, index) => (
                  <li key={index}>
                    {productsdata.find((p) => p._id === id)?.name}
                  </li>
                ))}
              </TableCell>
              <TableCell className="text-right">${item.totalAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default Page;
