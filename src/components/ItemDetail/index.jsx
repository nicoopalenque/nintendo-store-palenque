/* eslint-disable react-hooks/exhaustive-deps */

import {
  Container,
  Detail,
  Discount,
  H1,
  Image,
  Info,
  Price,
  Prices,
  Span,
  Spec,
  Title,
} from "./detailElements";
import { useEffect, useState } from "react";

import SaleButton from "../Button/SaleButton";
import { getGameByTitle } from "../../services/games";
import { useParams } from "react-router-dom";

const ItemDetail = ({ setItemCount }) => {
  const { title } = useParams();
  const [game, setGame] = useState({});
  const [discount, setDiscount] = useState(0);

  const getGame = async () => {
    const data = await getGameByTitle(title);
    setGame(data[0]);

    if (data.hotSale) {
      let disc = (data.price * data.discount) / 100;
      let total = data.price - disc;
      setDiscount(total.toFixed(2));
    }
  };

  useEffect(() => {
    getGame();
  }, []);

  const IsGame = () => (
    <>
      <Spec>
        <Title>Lanzamiento:</Title>
        <Info>{game.releaseDate}</Info>
      </Spec>
      <Spec>
        <Title>Peso:</Title>
        <Info>{game.size}</Info>
      </Spec>
      <Spec>
        <Title>Genero:</Title>
        <Info>{game.gender}</Info>
      </Spec>
    </>
  )

  const IsConsole = () => (
    <>
      <Spec>
        <Title>Lanzamiento:</Title>
        <Info>{game.releaseDate}</Info>
      </Spec>
      <Spec>
        <Title>Almacenamiento:</Title>
        <Info>{game.storage}</Info>
      </Spec>
    </>
  )

  return (
    <>
      <Container>
        <Image src={game.image} />
        <H1>{game.title}</H1>
        <Detail>{game.description}</Detail>
        <Prices>
          {game.hotSale && <Discount>$ {game.price}</Discount>}
          {game.hotSale && <Span>{game.discount}%</Span>}
        </Prices>
        {game.hotSale ? (
          <Price>$ {discount}</Price>
        ) : (
          <Price>$ {game.price}</Price>
        )}
        <SaleButton game={game} setItemCount={setItemCount}/>
        {game.type === 'game' ? <IsGame/> : <IsConsole/>}
      </Container>
    </>
  );
};

export default ItemDetail;
