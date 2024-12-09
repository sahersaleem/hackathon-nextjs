import React from "react";
import Wrapper from "./Wrapper";
import Image from "next/image";

interface IProductCard {
  imageUrl: string;
  text1: string;
  text2: string;
  price: string;
}
const ProductCard = ({ imageUrl, text1, text2, price }: IProductCard) => {
  return (
    <div className="flex xsjustify-between xs:flex-col lg:flex-row  sm:justify-between">
      <div className="flex gap-[21px]">
        
        <Image src={imageUrl} width={109} height={134} alt="product" />
        <div> <h4>{text1}</h4>
        <p className="font-[400] text-[14px] leading-[21px]">{text2}</p>
        <p className="medium">{price}</p></div>
       
      </div>
<div className="w-60 flex justify-between"> <p className="link">1</p>
<p>{price}</p></div>
     
    </div>
  );
};

const ShoppingCart = () => {
  return (
    <div className="w-full">
      <Wrapper>
        <div className="pb-[20px]">
        <h1 className=" mt-[64px] xs:text-center sm:text-left">Your Shopping Cart</h1>
        <div className="flex flex-col border-[#EBE8F4] border-b pb-[20px] xs:py-[8px] lg:py-0">
        <div className="flex justify-between mt-[100px] xs:hidden sm:flex">
          <h4>Product</h4>
         
            <div className="flex justify-between w-60">
              <h4>Quantity</h4>
              <h4>Total</h4>
            </div>
            </div>
            <div className="mt-[50px] space-y-4">
              <ProductCard
                imageUrl="/images/product1.png"
                text1="Graystone vase"
                text2="A timeless ceramic vase with 
a tri color grey glaze."
                price="£85"
              />
              <ProductCard
                imageUrl="/images/product1.png"
                text1="Graystone vase"
                text2="A timeless ceramic vase with 
a tri color grey glaze."
                price="£85"
              />
            </div>
          </div>
          <div className="w-full flex justify-center sm:items-end flex-col space-y-3 p-6">
            <div className="flex justify-center items-center gap-x-2"><h4>Subtotal </h4> <h3>£210</h3></div>
            <span>Taxes and shipping are calculated at checkout</span>
            <button className="btn">Go to checkout</button>
          </div>
          </div>
      </Wrapper>
    </div>
  );
};

export default ShoppingCart;
