import React, { useContext } from "react";
import Square from "./Square";
import { PlayersContext } from "../context/PlayersContext";

const Board = () => {
  const [players, setPlayers] = useContext(PlayersContext);

  const generateBoard = () => {
    players[0].board;
  };

  return <div className='game-board'></div>;
};

export default Board;
