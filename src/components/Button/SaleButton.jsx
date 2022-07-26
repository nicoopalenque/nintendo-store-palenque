import { Action, Button, Counter } from "./buttonElements";
import { useContext, useState } from "react";

import { CartContext } from "../../context/CartContext";

const SaleButton = ({ game }) => {
  const [count, setCount] = useState(1);
  const { cartItems, setCartItems } = useContext(CartContext);

  const WithOutStock = () => {
    return <Counter>Sin stock</Counter>;
  };

  const onAdd = () => {
    const exist = cartItems.find((item) => item.id === game.id);
    if (!exist)
      setCartItems((prevState) => [...prevState, {...game, quantity: count}]);
  };

  const WithStock = () => {
    return (
      <>
          <Button
            onClick={() => (count !== game.stock ? setCount(count + 1) : true)}
          >
            +
          </Button>
          <Counter>{count}</Counter>
          <Button onClick={() => (count > 0 ? setCount(count - 1) : true)}>
            -
          </Button>
          <Button
            onClick={() => onAdd()}
          >Add to cart</Button>
      </>
    );
  };

  return <Action>{game.stock > 0 ? <WithStock /> : <WithOutStock />}</Action>;
};

export default SaleButton;
