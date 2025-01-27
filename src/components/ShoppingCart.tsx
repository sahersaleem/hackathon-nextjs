"use client";
import React, { useEffect, useState } from "react";
import Wrapper from "./Wrapper";
import Image from "next/image";
import { useCart } from "./CartContext";
import { IProduct } from "@/app/productListing/[product_Id]/page";
import { client } from "@/sanity/lib/client";
import debounce from "lodash.debounce";
import Link from "next/link";
import PaymentInfo from "./Payment";

interface IProductCard {
  imageUrl: string;
  text1: string;
  text2: string;
  price: number;
  id: string;
}

const ProductCard = ({ imageUrl, text1, text2, price, id }: IProductCard) => {
  const { addProductQuanity, decreaseProduct, cartProducts } = useCart();

  const quantity = cartProducts.filter((p_id) => p_id === id).length;

  const total = quantity * price;

  return (
    <div className="flex  xs:justify-between xs:flex-col lg:flex-row  sm:justify-between items-center xs:gap-y-4 lg:gap-y-0 border-b border-blue/10 pb-10">
      <div className="flex xs:px-[10px] lg:py-0 gap-[21px] xs:flex-col lg:flex-row xs:justify-center xs:items-center">
        <Image
          src={imageUrl}
          width={109}
          height={134}
          alt="product"
          className="max-w-[109px] max-h-[134px] min-h-[134px]"
        />
        <div className=" flex xs:flex-col xs:justify-center lg:justify-start xs:items-center lg:items-start  ">
          {" "}
          <h4 className="text-center lg:text-left">{text1}</h4>
          <p className=" text-[14px] leading-[21px] font-satoshi-display font-light text-center lg:text-left">
            {text2.substring(0, 50) + "..."}
          </p>
          <p className="medium">{price}</p>
        </div>
      </div>
      <div className="w-60 flex justify-between xs:flex-col lg:flex-row">
        {" "}
        <div className="flex gap-x-6 justify-center items-center">
          {" "}
          <button
            className="btn !py-1 !px-3"
            onClick={() => {
              addProductQuanity(id);
            }}
          >
            +
          </button>{" "}
          <p className="link">{quantity}</p>{" "}
          <button
            className="btn !py-1 !px-3"
            onClick={() => {
              decreaseProduct(id);
            }}
          >
            -
          </button>{" "}
        </div>
        <p
          className="text-center lg:text-left xs:mt-4 lg:mt-0
        "
        >
          {" "}
          Total:{total}
        </p>
      </div>
    </div>
  );
};

const ShoppingCart = () => {
  const { cartProducts } = useCart();
  const [products, setProducts] = useState<IProduct[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  let total = 0;
  for (const id of cartProducts) {
    const price = products?.find((val) => val._id === id)?.price || 0;
    total += price;
  }

  useEffect(() => {
    const getCartProducts = debounce(async () => {
      setLoading(true)
      try {
        const getProducts = await client.fetch(
          `*[_type=="product" && _id in ${JSON.stringify(cartProducts)}]`
        );
        if (getProducts) {
          setProducts(getProducts);
          setLoading(false)
        }
      } catch (error) {
         setLoading(false)
      } finally{
        setLoading(false)

      }
    
    }, 3000);

    getCartProducts();

    return () => getCartProducts.cancel();
  });

  return (
    <div className="w-full">
      <Wrapper>
        <div className="pb-[20px]">
          <h1 className=" mt-[64px] xs:text-center sm:text-left">
            Your Shopping Cart
          </h1>
          <div className="flex flex-col border-[#EBE8F4] border-b pb-[20px] xs:py-[8px] lg:py-0">
            <div className="flex justify-between mt-[100px] xs:hidden sm:flex">
              <h4>Product</h4>

              <div className="flex justify-between w-60">
                <h4>Quantity</h4>
                <h4>Total</h4>
              </div>
            </div>

            {
            loading && <div className="w-full h-screen flex justify-center items-center"> <div className="loader text-6xl"></div></div>
            }
            <div className="mt-[50px] space-y-10">
              {cartProducts.length > 0 ? (
                products?.map((item: IProduct) => (
                  <ProductCard
                    key={item._id}
                    imageUrl={item.image}
                    text1={item.name}
                    text2={item.description}
                    price={item.price}
                    id={item._id}
                  />
                ))
              ) : (
                <div>Please enter products in cart!</div>
              )}
            </div>
          </div>

          {products ? (
            <div className="w-full flex justify-center items-end flex-col space-y-3 p-6">
              <div className="flex justify-center items-center gap-x-2">
                <h4 className="text-[#4E4D93]">Subtotal </h4> <h3>{total}</h3>
              </div>
              <span className="text-[#4E4D93] font-satoshi-display font-light text-end">
                Taxes and shipping are calculated at checkout
              </span>
              <button className="btn">
                <Link href={"#checkout"}>Go to checkout</Link>
              </button>
            </div>
          ) : (
            ""
          )}
        </div>

        {products && (
          <div className="flex justify-center items-center pb-6">
            <PaymentInfo ids={cartProducts} totalAmount={total} />
          </div>
        )}
      </Wrapper>
    </div>
  );
};

export default ShoppingCart;
