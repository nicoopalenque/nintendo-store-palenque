import { Action, LinkTo, P, Total } from "./CartViewElement";
import { useContext, useState } from "react";

import { CartContext } from "../../context/CartContext";
import ItemView from "./ItemView";

const CartView = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const [total, setTotal] = useState(0);
  const Actions = () => (
    <>
      <Total>
        <P>Total: ${total.toFixed(2)}</P>
      </Total>
      <Action>
        <LinkTo
          style={{
            backgroundColor: "white",
            color: "black",
            borderColor: "#9e9898",
            borderWidth: "0.5px",
            borderStyle: "solid",
          }}
          to="/juegos"
        >
          Cancelar
        </LinkTo>
        <LinkTo to="/juegos">Comprar</LinkTo>
      </Action>
    </>
  );
  return (
    <>
      {cartItems.map((item, key) => (
        <ItemView
          key={key}
          item={item}
          cartItems={cartItems}
          setCartItems={setCartItems}
          setTotal={setTotal}
        />
      ))}
      {cartItems.length > 0 ? <Actions /> : <P>Carrito vacio</P>}
    </>
  );
};

export default CartView;
