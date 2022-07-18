import { Action, Button, Counter } from "./buttonElements";

import { useState } from "react";

const SaleButton = ({ game }) => {
  const [count, setCount] = useState(0);

  const WithOutStock = () => {
    return <Counter>Sin stock</Counter>;
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
          <Button>Add to cart</Button>
      </>
    );
  };

  return <Action>{game.stock > 0 ? <WithStock /> : <WithOutStock />}</Action>;
};

export default SaleButton;
