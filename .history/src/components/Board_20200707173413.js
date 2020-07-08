import React, { useContext } from "react";
import Square from "./Square";
import { PlayersContext } from "../context/PlayersContext";

const Board = () => {
  // eslint-disable-next-line
  const [players, setPlayers] = useContext(PlayersContext);
  let playerBoard = players[0].board.grid;
  let computerBoard = players[1].board.grid;

  return (
    <div className='game-boards'>
      <div className='game-board'>
        {playerBoard.map((col) =>
          col.map((row) => <Square key={Math.random() * 100} />)
        )}
      </div>

      <div className='game-board'>
        {computerBoard.map((col) =>
          col.map((row) => <Square key={Math.random() * 100} />)
        )}
      </div>
    </div>
  );
};

export default Board;
