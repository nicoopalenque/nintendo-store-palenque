/* eslint-disable react-hooks/exhaustive-deps */

import {
  Card,
  Clear,
  Description,
  Discount,
  HeadC,
  Image,
  ImageGame,
  Price,
  Prices,
  Span,
  Title,
} from "./gamesElements";
import { useEffect, useState } from "react";

import SaleButton from "../Button/SaleButton";
import { ViewMoreLink } from "../Button/ViewMoreLink";

export const CardElement = ({ game, setCartItems }) => {

  const [discount, setDiscount] = useState(0);

  const getDiscount = () => {
    if (game.hotSale) {
      let disc = (game.price * game.discount)/100;
      let total = game.price - disc;
      setDiscount(total.toFixed(2));
    }
  }

  useEffect(() => {
    getDiscount();
  }, []);

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

        <Prices>
          {game.hotSale && <Discount>$ {game.price}</Discount>}
          {game.hotSale && <Span>{game.discount}%</Span>}
        </Prices>
        {
          game.hotSale
          ? <Price>$ {discount}</Price>
          : <Price style={{
            marginTop: "1.62rem"
          }}>$ {game.price}</Price>
        }
        <SaleButton game={game} setCartItems={setCartItems}/>
        <ViewMoreLink item={game}/>
        <Clear />
      </Card>
    </>
  );
};
