import CartContext from "@/components/CartContext";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return <CartContext> {children}</CartContext>;
};

export default layout;
