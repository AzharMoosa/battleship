import React, { useContext } from "react";
import Player from "../functions/Player";
import Gameboard from "../functions/Gameboard";
import { PlayersContext } from "../context/PlayersContext";

const Header = () => {
  const [players, setPlayers] = useContext(PlayersContext);
  const startGame = () => {
    let player = new Player(false);
    let playerBoard = new Gameboard();
    let computer = new Player(true);
    let computerBoard = new Gameboard();
    let updatedState = [...players];
    updatedState[0].player = player;
    updatedState[0].board = playerBoard;
    updatedState[1].player = computer;
    updatedState[1].board = computerBoard;
    setPlayers(updatedState);
  };

  return (
    <div className='header'>
      <h1>Battleship</h1>
      <button className='btn-primary' onClick={startGame}>
        Start
      </button>
    </div>
  );
};

export default Header;
