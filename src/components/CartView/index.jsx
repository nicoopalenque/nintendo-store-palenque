import { Action, LinkTo, P, Total } from "./CartViewElement";
import { buyItemService, updateStock } from "../../services/games";
import { useContext, useState } from "react";

import { CartContext } from "../../context/CartContext";
import ItemView from "./ItemView";
import LoginButtons from "../Button/LoginButtons";

const CartView = () => {
  const { cartItems, setCartItems, user, login } = useContext(CartContext);
  const [total, setTotal] = useState(0);

  const buyItems = () => {
    const itemToBuy = {
      buyer: user,
      items: cartItems,
      date: new Date().toString(),
      total: total.toFixed(2),
    };
    buyItemService(itemToBuy);
    updateStock(itemToBuy.items);
    setCartItems([]);
  };

  const loged = () => {
    return (
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
        <LinkTo onClick={() => buyItems()} to="/perfil">
          Comprar
        </LinkTo>
      </Action>
    );
  };

  const dontLoged = () => (
    <>
      <LoginButtons login={login} path={"carrito"} />
    </>
  );

  const Actions = () => (
    <>
      <Total>
        <P>Total: ${total.toFixed(2)}</P>
      </Total>
      {user.name ? loged() : dontLoged()}
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
