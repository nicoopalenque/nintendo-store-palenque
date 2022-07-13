export const getGames = async () => {
  return await fetch("https://demo2792205.mockable.io/games")
    .then((response) => response.json())
    .then((data) => data);
};
