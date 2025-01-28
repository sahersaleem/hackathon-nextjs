"use client";

import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { IProduct } from "@/app/productListing/[product_Id]/page";
import Card from "./Card";
import { ICategory } from "@/app/productListing/page";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaSpinner } from "react-icons/fa";
import Link from "next/link";

const Products = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [categories, setCategories] = useState<ICategory[] | null>(null);
  const [category, setCategory] = useState<string>("");
  const itemsPerPage = 7;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const start = (currentPage - 1) * itemsPerPage;
      const end = start + itemsPerPage - 1;
      const productsFetchFromSanity = await client.fetch(
        `*[_type=="product" && slug == ^.slug] | order(_createdAt desc) [${start}..${end}]`
      );
      console.log(productsFetchFromSanity);
      setProducts(productsFetchFromSanity);
      setLoading(false)
      const fetchCategoriesFromSanity =
        await client.fetch(`*[_type=="category"]`);
      setCategories(fetchCategoriesFromSanity);
    };

    getProducts();
  }, [currentPage]);

  useEffect(() => {
    const getProductsFilteredVyCategory = async () => {
      setLoading(true);
      const start = (currentPage - 1) * itemsPerPage;
      const end = start + itemsPerPage - 1;
      if (category) {
        const productDataAccordingToCategory = await client.fetch(
          `*[_type=="product" && slug == ^.slug && category.name=="${category}" && defined(image)] | order(_createdAt desc)[${start}..${end}]`
        );

        setLoading(false);
        setProducts(productDataAccordingToCategory);
      }
    };
    getProductsFilteredVyCategory();
  }, [category]);

  return (
    <>
      <div className="px-10 flex gap-x-6 w-full justify-around">
        <div className="flex gap-x-6">
          <button
            onClick={() => setCurrentPage((prev) => prev - 1)}
            disabled={currentPage == 1}
            className="bg-off-white text-black px-4 py-2 rounded-md hover:bg-white transition-all duration-200 ease-in-out border-none"
          >
            Previous
          </button>
          <button
            className="bg-off-white text-black px-4 py-2 rounded-md hover:bg-white transition-all duration-200 ease-in-out border-none"
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            Next
          </button>
        </div>
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
      </div>


      <div>
        {
            loading&&(
                <div className="loader"></div>
            )
        }
      </div>
      <div className="flex  flex-wrap h-full bg-black mt-10 gap-6 justify-center items-center max-w-6xl w-full mx-auto">
        {products.map((item) => (
           <Link href={`/admin/products/${item._id}`}>  <Card
            src={item.image}
            name={item.name}
            price={item.price}
            key={item._id}
          /></Link>
        ))}
      </div>
    </>
  );
};

export default Products;
