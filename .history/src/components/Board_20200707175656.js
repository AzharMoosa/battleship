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
    playerBoard.placeShip(0, 0, player.ship[0], 0);
    playerBoard.placeShip(0, 0, player.ship[1], 0);
    playerBoard.placeShip(0, 0, player.ship[2], 0);
    playerBoard.placeShip(0, 0, player.ship[3], 0);
    playerBoard.placeShip(0, 0, player.ship[4], 0);
  };

  return (
    <div className='game-boards'>
      <div className='game-board'>
        {playerBoard.grid.map((col) =>
          col.map((elm) => <Square key={uuidv4()} elm={elm} />)
        )}
      </div>

      <div className='game-board'>
        {computerBoard.grid.map((col) =>
          col.map((row) => <Square key={uuidv4()} col={col} />)
        )}
      </div>
    </div>
  );
};

export default Board;
