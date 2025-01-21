"use client";

import React, { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { toast } from "react-hot-toast";

type Cart = {
  addProducts: (id: string) => void;
  cartProducts: string[];
  setCartProducts: React.Dispatch<React.SetStateAction<string[]>>;
};

const cartContext = createContext<Cart | null>(null);

const CartContext = ({ children }: { children: React.ReactNode }) => {



  // Cart products state
  const [cartProducts, setCartProducts] = useState<string[]>([]);



  // useEffect for getting item from localStorage
  useEffect(() => {
    const store = JSON.parse(window.localStorage.getItem("cart") || "[]");

    if (!store) {
      console.error("store is not pressent");
    } else {
      setCartProducts(store);
    }
  }, []);



  // use\effect for setting item in local storage
  useEffect(() => {
    if (cartProducts.length > 0) {
      const item = localStorage.setItem("cart", JSON.stringify(cartProducts));
    }
  }, [cartProducts]);



  // function to add Producuts
  const addProducts = (productId: string) => {
    const findId = cartProducts.find((id) => id === productId);
    console.log(findId);
    if (findId) {
      toast.error("product already added in cart");
      return;
    } else {
      setCartProducts((prev) => {
        return [...prev, productId];
      });
      toast.success("product added in cart successfully");
    }
  };


  









  return (
    <cartContext.Provider
      value={{ addProducts, cartProducts, setCartProducts }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default CartContext;



// custom hook
export const useCart = () => {
  const context = useContext(cartContext);
  if (!context) {
    console.warn("useCart called outside of CartContext.Provider");
    return {
      addProducts: () => {},
      cartProducts: [],
      setCartProducts: () => {},
    }; // Return default values or a mock implementation
  }
  return context;
};
