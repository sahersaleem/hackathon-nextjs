import React from "react";
import Wrapper from "./Wrapper";
import Image from "next/image";
import Featured from "./Featured";

interface IAboutCard {
  text1: string;
  text2: string;
  btnText: string;
 
  className:string
  headingClass:string
}
const AboutCard = ({ text1, text2, btnText  , className , headingClass}: IAboutCard) => {
  return (
    <div className={` ${className} lg:w-1/2 bg-[#2A254B] flex flex-col xs:p-[30px] lg:p-20 justify-between xs:gap-y-6 xs:gap-x-[12px] lg:gap-x-0 lg:gap-y-0 xs:h-[281px] lg:h-auto `}>
        <div><h1 className={`${headingClass} section-heading `}>{text1}</h1>
        <p className="font-satoshi-display font-light">{text2}</p></div>
      

<div><button className={`btn xs:w-full lg:w-auto`}>{btnText}</button></div>
      
    </div>
  );
} 

const Aboutfeature = () => {
  return (
    <div className="w-full">
      <Wrapper>
        <div className="flex xs:flex-col lg:flex-row pb-20 xs:px-[10px] lg:px-0 xs:space-y-9 lg:space-y-0" >
          <AboutCard text1="It started with a small idea" text2="A global brand with local beginnings, our story begain in a small studio in South London in early 2014" btnText="View Collection" headingClass="text-white" className="text-white"/>
          <div className="lg:w-1/2 ">
            <Image
              src={"/images/about.png"}
              width={630}
              height={478}
              alt="ab"
            />
          </div>
        </div>
      </Wrapper>
      <Featured/>
    </div>
  );
};

export default Aboutfeature;
