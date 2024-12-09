import React from "react";
import Wrapper from "./Wrapper";
import Image from "next/image";

interface ICard {
  image: string;
  name: string;
  price: string;
  className?: string;
  width?: number;
  height?: number;
}
export const Card = ({
  image,
  name,
  price,
  className,
  width,
  height,
}: ICard) => {
  return (
    <div className={`${className} flex flex-col gap-[24px]  justify-center`}>
      <Image
        src={image}
        alt="item"
        width={width || 305}
        height={height || 375}
        className=""
      />
      <div className="flex flex-col gap-[8px]">
        {" "}
        <h4>{name}</h4>
        <p>{price}</p>
      </div>
    </div>
  );
};

const Listings = () => {
  return (
    <div className="bg-white py-20 w-full">
      <Wrapper>
        <h1 className="section-heading mb-8 xs:text-center lg:text-left">New Ceramics</h1>
        <div className="flex xs: justify-center lg:justify-between xs:flex-wrap lg:flex-nowrap xs:gap-6">
          <Card
            image="/images/item1.png"
            name="The Dandy chair"
            price={"£250"}
          />
          <Card
            image="/images/item2.png"
            name="The Dandy chair"
            price={"£250"}
          />
          <Card
            image="/images/item3.png"
            name="The Dandy chair"
            price={"£250"}
          />
          <Card
            image="/images/item4.png"
            name="The Dandy chair"
            price={"£250"}
          />
        </div>
        <div className="flex justify-center mt-14">
          {" "}
          <button className="btn xs:w-full lg:w-auto !bg-[#F9F9F9] !text-blue">
            View Collection
          </button>
        </div>
      </Wrapper>
    </div>
  );
};

export default Listings;
