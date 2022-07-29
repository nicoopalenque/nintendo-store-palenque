import { Action, Button, Counter } from "./buttonElements";
import { useContext, useState } from "react";

import { CartContext } from "../../context/CartContext";
import CounterComponent from "./CounterButton";

const SaleButton = ({ game }) => {
  const [count, setCount] = useState(1);
  const { cartItems, setCartItems } = useContext(CartContext);

  const WithOutStock = () => {
    return <Counter>Sin stock</Counter>;
  };

  const onAdd = () => {
    const exist = cartItems.find((item) => item.id === game.id);
    if (!exist) {
      let priceDiscount;
      if (game.hotSale) {
        const discount = game.price * (game.discount / 100);
        priceDiscount = game.price - discount;
      }
      setCartItems((prevState) => [...prevState, {...game, quantity: count, priceDiscount}]);

    };
  };

  const WithStock = () => {
    return (
      <>
          <CounterComponent game={game} setCount={setCount} count={count} />
          <Button
            onClick={() => onAdd()}
          >Add to cart</Button>
      </>
    );
  };

  return <Action>{game.stock > 0 ? <WithStock /> : <WithOutStock />}</Action>;
};

export default SaleButton;
