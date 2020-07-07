import React, { useState, createContext } from "react";

export const PlayersContext = createContext();

export const PlayersProvider = (props) => {
  const [players, usePlayers] = useState([{}]);

  return (
    <PlayersContext.Provider valu>{props.children}</PlayersContext.Provider>
  );
};
