import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const NewGame = styled(Link)``;
const Game = styled.div``;

function Games(props) {
  const [games, setGames] = React.useState([]);

  React.useEffect(() => {
    const testGames = [
      { title: 'my game test', numbers: [1, 2, 3, 4, 5, 6, 7] },
      { title: 'my game 2', numbers: [1, 2, 3, 4, 5, 6, 7] },
    ];
    sessionStorage.setItem('games', JSON.stringify(testGames));
    const gamesFromStorage = sessionStorage.getItem('games');
    if (gamesFromStorage) {
      setGames(JSON.parse(gamesFromStorage));
    }
  }, []);

  return (
    <>
      <NewGame to="/newgame">+</NewGame>
      {games.map((game) => (
        <Game key={game.title}>{game.title}</Game>
      ))}
    </>
  );
}

export default Games;
