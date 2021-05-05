import { createContext, useContext, useState } from "react";

export const CartContext = createContext();


export function CartProvider({ children }) {
 const [wishlist,setWishlist]=useState([]);

  return (
    <CartContext.Provider
      value={{ wishlist, setWishlist }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
