import { useEffect, useState } from "react";

import { CardElement } from "../../components/Card";
import { getGames } from "../../services/games";
import styled from "styled-components";

const Games = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getGames().then((games) => {
      setGames(games);
    });
  }, []);

  return (
    <Container>
      {
        games.map((game) => (
          <CardElement key={game.id} game={game} />
        ))
      }
    </Container>
  );
};

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2rem 4rem;
`;
export default Games;
