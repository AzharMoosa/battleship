import React, { useContext } from "react";
import { PlayersContext } from "../context/PlayersContext";

const Header = () => {
  // eslint-disable-next-line
  const [players, setPlayers] = useContext(PlayersContext);
  const startGame = () => {
    let player = players[0].player;
    let computer = players[1].player;
    let playerBoard = players[0].board;
    let computerBoard = players[1].board;

    playerBoard.placeShip(0, 0, player.ships[0], 0);
    playerBoard.placeShip(0, 1, player.ships[1], 0);
    playerBoard.placeShip(0, 2, player.ships[2], 0);
    playerBoard.placeShip(0, 3, player.ships[3], 0);
    playerBoard.placeShip(0, 4, player.ships[4], 0);

    computerBoard.placeShip(0, 0, computer.ships[0], 1);
    computerBoard.placeShip(1, 0, computer.ships[1], 1);
    computerBoard.placeShip(2, 0, computer.ships[2], 1);
    computerBoard.placeShip(3, 0, computer.ships[3], 1);
    computerBoard.placeShip(4, 0, computer.ships[4], 1);

    console.log(playerBoard);
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
