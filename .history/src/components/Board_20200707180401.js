import React, { useContext } from "react";
import Square from "./Square";
import { v4 as uuidv4 } from "uuid";
import { PlayersContext } from "../context/PlayersContext";

const Board = () => {
  // eslint-disable-next-line
  const [players, setPlayers] = useContext(PlayersContext);
  let playerBoard = players[0].board;
  let computerBoard = players[1].board;
  let player = players[0].player;
  let computer = players[1].player;

  const startGame = () => {
    playerBoard.placeShip(0, 0, player.ships[0], 0);
    playerBoard.placeShip(0, 1, player.ships[1], 0);
    playerBoard.placeShip(2, 2, player.ships[2], 0);
    playerBoard.placeShip(5, 3, player.ships[3], 0);
    playerBoard.placeShip(1, 4, player.ships[4], 0);

    computerBoard.placeShip(0, 0, computer.ships[0], 1);
    computerBoard.placeShip(1, 0, computer.ships[1], 1);
    computerBoard.placeShip(2, 0, computer.ships[2], 1);
    computerBoard.placeShip(3, 0, computer.ships[3], 1);
    computerBoard.placeShip(4, 0, computer.ships[4], 1);
  };

  return (
    <div className='game-boards'>
      <div className='game-board'>
        {startGame()}
        {playerBoard.grid.map((col) =>
          col.map((elm) => <Square key={uuidv4()} elm={elm} />)
        )}
      </div>

      <div className='game-board'>
        {computerBoard.grid.map((col) =>
          col.map((elm) => <Square key={uuidv4()} elm={elm} />)
        )}
      </div>
    </div>
  );
};

export default Board;
