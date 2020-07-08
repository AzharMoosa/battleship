import React, { useState, createContext } from "react";
import { Player } from "../functions/Player";
import Gameboard from "../functions/Gameboard";

export const PlayersContext = createContext();

export const PlayersProvider = (props) => {
  let player = new Player(false);

  const [players, usePlayers] = useState([{ player: player }]);

  return (
    <PlayersContext.Provider value={[players, usePlayers]}>
      {props.children}
    </PlayersContext.Provider>
  );
};
