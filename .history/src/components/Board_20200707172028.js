import React, { useContext } from "react";
import Square from "./Square";
import { PlayersContext } from "../context/PlayersContext";

const Board = () => {
  const [players, setPlayers] = useContext(PlayersContext);

  const generateBoards = () => {
    let playerBoard = players[0].board.grid;
    let computerBoard = players[0].board.grid;
  };

  return <div className='game-board'>{generateBoards()}</div>;
};

export default Board;
