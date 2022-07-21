import { useEffect, useState } from "react";

import { CardElement } from "../../components/Card";
import { getGames } from "../../services/games";
import styled from "styled-components";

const Games = ({ setItemCount }) => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getGames().then((data) => setGames(data));
  }, []);

  return (
    <Container>
      {games.map((game) => (
        <CardElement key={game.id} game={game} setItemCount={setItemCount}/>
      ))}
    </Container>
  );
};

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 2rem 4rem;
`;
export default Games;
