import { BASE_URL } from "../common/constants";

export const getGames = async () => {
  return await fetch(`${BASE_URL}/games`)
    .then((response) => response.json())
    .then((data) => data);
};

export const getGameById = async (id) => {
  return await fetch(`${BASE_URL}/games/${id}`)
    .then((response) => response.json())
    .then((data) => data);
}