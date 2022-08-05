import { Action, LinkTo, P, Total } from "./CartViewElement";
import { useContext, useState } from "react";

import { CartContext } from "../../context/CartContext";
import ItemView from "./ItemView";
import { buyItemService } from "../../services/games";

const CartView = () => {
  const { cartItems, setCartItems, user } = useContext(CartContext);
  const [total, setTotal] = useState(0);

  const buyItems = () => {
    const itemToBuy = { buyer: user, items: cartItems, total: total.toFixed(2) }
    buyItemService(itemToBuy);
  }

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
        <LinkTo onClick={() => buyItems()} to="/juegos">Comprar</LinkTo>
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
