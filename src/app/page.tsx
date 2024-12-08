import Email from "@/components/Email";
import Featured from "@/components/Featured";
import FeaturedSection from "@/components/FeaturedSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Listings from "@/components/Listings";
import Navbar from "@/components/Navbar";
import PopularProducts from "@/components/PopularProducts";

export default function Home() {
  return (
    <div className="bg-white w-full h-screen text-black font-clash-display">
      <Navbar />
      <Hero />
      <FeaturedSection className=""/>
      <Listings/>
      <PopularProducts/>
      <Email/>
      <Featured/>
      <Footer/>
    </div>
  );
}
