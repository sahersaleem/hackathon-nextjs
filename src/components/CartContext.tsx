"use client";

import React, { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { toast } from "react-hot-toast";

type Cart = {
  addProducts: (id: string) => void;
  cartProducts: string[];
  setCartProducts: React.Dispatch<React.SetStateAction<string[]>>;
  addProductQuanity: (id: string) => void;
  decreaseProduct: (id: string) => void;
  clearProduct: () => void;
};

const cartContext = createContext<Cart | null>(null);

const CartContext = ({ children }: { children: React.ReactNode }) => {
  // Cart products state
  const [cartProducts, setCartProducts] = useState<string[]>([]);

  // useEffect for getting item from localStorage
  useEffect(() => {
    const store = JSON.parse(window.localStorage.getItem("cart") || "[]");

    if (store.length > 0) {
      setCartProducts(store);
    }
  }, []);

  // use\effect for setting item in local storage
  useEffect(() => {
    
      const item = localStorage.setItem("cart", JSON.stringify(cartProducts));
    
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

  // function for addQuanity
  const addProductQuanity = (productId: string) => {
    if (productId) {
      setCartProducts((prev) => {
        return [...prev, productId];
      });
      console.log("product quanity increased");
    }
  };

  // remove product quanitity

  const decreaseProduct = (productId: string) => {
    setCartProducts((prev) => {
      const ind = prev.indexOf(productId);
      if (ind !== -1) {
        return prev.filter((value, index) => index !== ind);
      }
      return prev;
    });
  };

const clearProduct = ()=>{
  setCartProducts([])
}





  return (
    <cartContext.Provider
      value={{
        clearProduct,
        addProducts,
        cartProducts,
        setCartProducts,
        addProductQuanity,
        decreaseProduct,
      }}
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
      addProductQuanity: () => {},
      decreaseProduct: () => {},
      clearProduct: () => {},
    }; // Return default values or a mock implementation
  }
  return context;
};
