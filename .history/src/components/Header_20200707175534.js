import React, { useContext } from "react";
import { PlayersContext } from "../context/PlayersContext";

const Header = () => {
  // eslint-disable-next-line
  const [players, setPlayers] = useContext(PlayersContext);

  return (
    <div className='header'>
      <h1>Battleship</h1>
      <button className='btn-primary'>Start</button>
    </div>
  );
};

export default Header;
