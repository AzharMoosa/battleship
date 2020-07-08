import React, { useContext } from "react";
import Square from "./Square";
import { PlayersContext } from "../context/PlayersContext";

const Board = () => {
  const [players, setPlayers] = useContext(PlayersContext);
  let playerBoard = players[0].board.grid;
  let computerBoard = players[1].board.grid;

  return (
    <div className='game-boards'>
      {playerBoard.map((i) => (
        <Square i={i} key={i} />
      ))}
    </div>
  );
};

export default Board;
