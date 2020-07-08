import React, { useState, createContext } from "react";
import Player from "../functions/Player";
import Gameboard from "../functions/Gameboard";

export const PlayersContext = createContext();

export const PlayersProvider = (props) => {
  const [players, usePlayers] = useState([{ player: "s" }]);

  return (
    <PlayersContext.Provider value={[players, usePlayers]}>
      {props.children}
    </PlayersContext.Provider>
  );
};
