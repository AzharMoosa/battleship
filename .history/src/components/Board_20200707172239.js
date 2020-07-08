import React, { useContext } from "react";
import Square from "./Square";
import { PlayersContext } from "../context/PlayersContext";

const Board = () => {
  const [players, setPlayers] = useContext(PlayersContext);

  const generateBoards = () => {
    let playerBoard = players[0].board.grid;
    let computerBoard = players[1].board.grid;

    for (let i = 0; i < playerBoard.length; i++) {
      return <Square />;
    }
  };

  return <div className='game-boards'>{generateBoards()}</div>;
};

export default Board;
