import React, { useState, createContext } from "react";
import Player from "../functions/Player";

export const PlayersContext = createContext();

export const PlayersProvider = (props) => {
  const [players, usePlayers] = useState();

  return (
    <PlayersContext.Provider value={[players, usePlayers]}>
      {props.children}
    </PlayersContext.Provider>
  );
};
