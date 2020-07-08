import React, { useContext } from "react";
import Square from "./Square";
import { PlayersContext } from "../context/PlayersContext";

const Board = () => {
  const [players, setPlayers] = useContext(PlayersContext);

  const generateBoard = () => {
    console.log(players[0].board.getGrid());
  };

  return <div className='game-board'>{generateBoard()}</div>;
};

export default Board;
