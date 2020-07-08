import React, { useContext } from "react";
import { PlayersContext } from "../context/PlayersContext";

const Header = () => {
  // eslint-disable-next-line
  const [players, setPlayers] = useContext(PlayersContext);
  const startGame = () => {
    let playerBoard = players[0].board.grid;
    let computerBoard = players[1].board.grid;
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
