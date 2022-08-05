import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState({});

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, user, setUser }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;