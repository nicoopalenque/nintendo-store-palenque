import React, { createContext, useState } from "react";

import { userLogin } from "../common/constants/user";

export const CartContext = createContext();

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState({});
  const login = () => {
    setUser(userLogin);
  };

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, user, setUser, login}}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;