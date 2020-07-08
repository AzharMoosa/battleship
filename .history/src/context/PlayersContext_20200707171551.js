import React, { useState, createContext } from "react";
import Player from "../functions/Player";

export const PlayersContext = createContext();

export const PlayersProvider = (props) => {
  const [player, usePlayer] = useState(Player(false));

  return (
    <PlayersContext.Provider value={[player, usePlayer]}>
      {props.children}
    </PlayersContext.Provider>
  );
};
