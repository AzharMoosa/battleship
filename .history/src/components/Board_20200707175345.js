import React, { useContext } from "react";
import Square from "./Square";
import { v4 as uuidv4 } from "uuid";
import { PlayersContext } from "../context/PlayersContext";

const Board = () => {
  // eslint-disable-next-line
  const [players, setPlayers] = useContext(PlayersContext);
  let playerBoard = players[0].board.grid;
  let computerBoard = players[1].board.grid;
  playerBoard.placeShip(0, 0, players[0].ships[0], 0);

  return (
    <div className='game-boards'>
      <div className='game-board'>
        {playerBoard.map((col) =>
          col.map((elm) => <Square key={uuidv4()} elm={elm} />)
        )}
      </div>

      <div className='game-board'>
        {computerBoard.map((col) =>
          col.map((row) => <Square key={uuidv4()} col={col} />)
        )}
      </div>
    </div>
  );
};

export default Board;
