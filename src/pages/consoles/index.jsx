import { Add, Cards, Container, H1, H2, Image, P, Product } from "./gamesElements";

import { getGames } from "../../services/games";

const Games = () => {
  const games = getGames();
  return (
    <>
    <Cards>
      {games.map(game => (
      <Container key={game.id}>
        <div>
          <Image src={game.image} />
        </div>
        <Product>
          <H1>{game.title}</H1>
          <H2>{game.price}</H2>
          <P>{game.description}</P>
          <div>
            <Add>Add to cart</Add>
          </div>
        </Product>
      </Container>
      ))}
    </Cards>
    </>
  );
};

export default Games;
