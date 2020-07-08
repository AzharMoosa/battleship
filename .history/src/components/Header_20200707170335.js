import React from "react";
import { PlayersContext } from "../context/PlayersContext";

const Header = () => {
  const [players, setPlayers] = useContext(PlayersContext);
  const startGame = () => {};

  return (
    <div className='header'>
      <h1>Battleship</h1>
      <button className='btn-primary'>Start</button>
    </div>
  );
};

export default Header;
