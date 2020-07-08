import React, { useContext } from "react";
import Player from "../functions/Player";
import { PlayersContext } from "../context/PlayersContext";

const Header = () => {
  const [players, setPlayers] = useContext(PlayersContext);
  const startGame = () => {
    let player = new Player();
    let computer = new Player();
    let updatedState = [...players];
    updatedState[0].player = player;
    updatedState[1].player = computer;
    setPlayers(updatedState);
  };

  return (
    <div className='header'>
      <h1>Battleship</h1>
      <button className='btn-primary'>Start</button>
    </div>
  );
};

export default Header;
