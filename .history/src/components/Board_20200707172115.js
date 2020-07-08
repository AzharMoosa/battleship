import React, { useContext } from "react";
import Square from "./Square";
import { PlayersContext } from "../context/PlayersContext";

const Board = () => {
  const [players, setPlayers] = useContext(PlayersContext);

  const generateBoards = () => {
    let playerBoard = players[0].board.grid;
    let computerBoard = players[0].board.grid;

    playerBoard.forEach(() => <Square />);
  };

  return <div className='game-boards'>{generateBoards()}</div>;
};

export default Board;
