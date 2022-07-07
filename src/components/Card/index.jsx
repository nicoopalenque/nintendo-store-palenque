import {
  Action,
  Button,
  Card,
  Counter,
  Description,
  HeadC,
  Image,
  ImageGame,
  Price,
  Title,
} from "./gamesElements";

import { useState } from "react";

export const CardElement = ({ game }) => {
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
  
  return (
    <>
      <Card key={game.id}>
        <Image>
          <ImageGame src={game.image} />
        </Image>
        <HeadC>
          <Title>{game.title}</Title>
        </HeadC>
        <Description>{game.description}</Description>
        <Price>{game.price}</Price>
        <Action>
          {game.stock > 0 ? <WithStock /> : <WithOutStock />}         
        </Action>
      </Card>
    </>
  );
};
