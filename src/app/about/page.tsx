import AboutPageHeader from "@/components/AboutPageHeader";
import React from "react";

import AboutPageHero from "@/components/AboutPageHero";
import Aboutfeature from "@/components/Aboutfeature";
import WhyChoose from "@/components/WhyChoose";
import Email from "@/components/Email";
import Footer from "@/components/Footer";
const page = () => {
  return (
    <div className="font-clash-display">
      <AboutPageHeader />
       <AboutPageHero/>
      <Aboutfeature/>
      <WhyChoose/>
      <Email/>
      <Footer/>
    </div>
  );
};

export default page;
