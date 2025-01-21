import Email from "@/components/Email";
import Featured from "@/components/Featured";
import FeaturedSection from "@/components/FeaturedSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Listings from "@/components/Listings";
import Login from "@/components/Login";
import Navbar from "@/components/Navbar";
import PopularProducts from "@/components/PopularProducts";
import { SignIn } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { SignedIn, UserButton, SignedOut, SignInButton } from "@clerk/nextjs";
import CartContext from "@/components/CartContext";
import { Toaster } from "react-hot-toast";

export default async function Home() {
  const { userId } = await auth();

  if (!userId) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <SignedOut>
          <SignInButton />
        </SignedOut>
      </div>
    );
  }

  return (
    <CartContext>
    <div className="bg-white w-full h-screen text-black font-clash-display">
      <Toaster position="bottom-left"/>
     
      <Navbar />
      <Hero />
      <FeaturedSection className="" />
      <Listings />
      <PopularProducts />
      <Email />
      <Featured />
      <Footer />
     
    </div>
    </CartContext>
  );
}
