import React, { useContext } from "react";
import Square from "./Square";
import { PlayersContext } from "../context/PlayersContext";

const Board = () => {
  const [players, setPlayers] = useContext(PlayersContext);

  return (
    <div className='game-board'>
      <Square />
    </div>
  );
};

export default Board;
