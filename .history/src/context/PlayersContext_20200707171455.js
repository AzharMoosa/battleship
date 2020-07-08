import React, { useState, createContext } from "react";

export const PlayersContext = createContext();

export const PlayersProvider = (props) => {
  const [player, usePlayer] = useState();

  return (
    <PlayersContext.Provider value={[player, usePlayer]}>
      {props.children}
    </PlayersContext.Provider>
  );
};
