import CartContext from "@/components/CartContext";
import Navbar from "@/components/Navbar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return <CartContext> <Navbar/>{children}</CartContext>;
};

export default layout;
