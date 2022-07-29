import { Button, Counter } from "./buttonElements";

import React from "react";

const CounterComponent = ({game, count, setCount}) => {
  return (
    <>
      <Button
        onClick={() => (count > 1  ? setCount(count - 1) : true)}
      >
        -
      </Button>
      <Counter>{count}</Counter>
      <Button onClick={() => (count !== game.stock ? setCount(count + 1) : true)}>
        +
      </Button>
    </>
  );
};

export default CounterComponent;
