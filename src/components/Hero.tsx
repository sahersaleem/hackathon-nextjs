import React from "react";
import Wrapper from "./Wrapper";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="pb-10 bg-white">
      <Wrapper>
        <div className="bg-blue flex max-w-7xl "> 
          <div className="flex flex-col justify-around xs:px-10 xs:py-20 lg:px-11  xs:gap-y-20 lg:gap-y-0 ">
            {" "}
            <div className=" space-y-[41px]">
              <h2 className="h2 xs:w-[300px] lg:w-[none]">
                The furniture brand for the <br/> future, with timeless designs
              </h2>
              <button className="btn xs:hidden lg:block ">View Collection</button>
              </div>
              <div className="">
                <p className="para">
                  A new era in eco friendly furniture with Avelon, the French
                  luxury retail brand with nice fonts, tasteful colors and a
                  beautiful way to display things digitally using modern web
                  technologies.
                </p>
              </div>
              <button className="btn xs:block lg:hidden ">View Collection</button>
          </div>

          <Image
            src={"/images/hero.png"}
            alt="her0"
            width={520}
            height={584}
            className="xs:hidden lg:block"
          />
        </div>
      </Wrapper>
    </div>
  );
};

export default Hero;
