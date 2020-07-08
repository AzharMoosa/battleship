import React, { useContext } from "react";
import Player from "../functions/Player";
import { PlayersContext } from "../context/PlayersContext";

const Header = () => {
  const [players, setPlayers] = useContext(PlayersContext);
  const startGame = () => {
    let player = new Play();
  };

  return (
    <div className='header'>
      <h1>Battleship</h1>
      <button className='btn-primary'>Start</button>
    </div>
  );
};

export default Header;
