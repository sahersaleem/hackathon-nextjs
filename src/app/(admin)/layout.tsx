import CartContext from "@/components/CartContext";
import Navbar from "@/components/Navbar";
import React from "react";
import Dashbord from "./_components/Dashbord";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <body className="bg-black">
    <div className="flex w-full bg-black/95 h-screen text-off-white">
        <Dashbord/> {children}
    </div>
    </body>
   
  )
};

export default layout;
