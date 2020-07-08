import React, { useContext } from "react";
import { PlayersContext } from "../context/PlayersContext";

const Header = () => {
  // eslint-disable-next-line
  const [players, setPlayers] = useContext(PlayersContext);
  const startGame = () => {
    playerBoard.placeShip(0, 0, ship, 0);
  };

  return (
    <div className='header'>
      <h1>Battleship</h1>
      <button className='btn-primary' onClick={startGame}>
        Start
      </button>
    </div>
  );
};

export default Header;
