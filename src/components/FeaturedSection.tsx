import React, { ReactNode } from "react";
import Wrapper from "./Wrapper";
import { TbBus } from "react-icons/tb";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { GoCreditCard } from "react-icons/go";
import { LuSprout } from "react-icons/lu";
interface ICard {
  icon:ReactNode ;
  heading: string;
  para: string;
  className:string
}
const Card = ({ icon, heading, para , className }: ICard) => {
  return (
    <div className={` ${className} w-[270px] flex gap-[16px] flex-col`}>
      <p>{icon}</p>
      <h4>{heading}</h4>
      <p className="medium">{para}</p>
    </div>
  );
};

const FeaturedSection = ({className}:{className:string}) => {
  return (
    <div className="bg-white  ">  
  <Wrapper><div className=" py-20 flex flex-col justify-around gap-y-20 ">
    <h3 className="text-center">What makes our brand different</h3>
    <div className=" flex xs:justify-center xs:gap-y-16 lg:gap-y-0 lg:justify-between xs:flex-wrap lg:flex-nowrap">
      <Card icon={<TbBus/>} heading="Next day as standard" para="Order before 3pm and get your order
the next day as standard" className={className}/>
      <Card icon={<IoIosCheckmarkCircleOutline/>} heading="Made by true artisans" para="Handmade crafted goods made with
real passion and craftmanship"  className={className}/>
      <Card icon={<GoCreditCard/>} heading="Unbeatable prices" para="For our materials and quality you won’t find better prices anywhere"  className={className}/>
      <Card icon={<LuSprout/>} heading="Recycled packaging" para="We use 100% recycled packaging to ensure our footprint is manageable"  className={className}/>
    </div>
  </div></Wrapper>
    </div>
  
    
  );
};

export default FeaturedSection;
