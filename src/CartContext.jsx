import { createContext, useContext, useState } from "react";
import axios from "axios";

export const CartContext = createContext();


export function CartProvider({ children }) {
 const [wishlist,setWishlist]=useState();
 const[playlist_data,setPlaylist_data]=useState([]);

 async function getData() {
  const temp = await axios.get("http://localhost:3001/playlist");
 
  setPlaylist_data(temp.data);
}

  return (
    <CartContext.Provider
      value={{ wishlist, setWishlist, playlist_data,setPlaylist_data,getData }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
