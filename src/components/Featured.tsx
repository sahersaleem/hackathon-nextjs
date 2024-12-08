import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <div className="w-full bg-white flex xs:flex-col lg:flex-row justify-between  lg:pl-[80px]  ">
      <div className="flex lg:gap-y-40 flex-col pb-10">
        {" "}
        <div className="mt-24 flex flex-col justify-center items-center xs:w-full lg:w-1/2 xs:pl-[10px] lg:pl-0 ">
          <h3 className="!leading-[33.6px] mb-8 xs:text-[20px] lg:text-[24px]">
            From a studio in London to a global brand with over 400 outlets
          </h3>
          <p className="text-[#505977] mb-8 xs:text-[14px]">
            When we started Avion, the idea was simple. Make high quality
            furniture affordable and available for the mass market.</p><p className="text-[#505977]"> Handmade,
            and lovingly crafted furniture and homeware is what we live, breathe
            and design so our Chelsea boutique become the hotbed for the London
            interior design community.
          </p>
        </div>
        <div className="flex">
          {" "}
          <button className="btn !bg-[#F9F9F9] !text-blue">Get in touch</button>
        </div>
      </div>

      <Image
        src={"/images/featured.png"}
        alt="featured"
        width={720}
        height={603}
        className="xs:w-full lg:w-1/2"
      />
    </div>
  );
};

export default Featured;
