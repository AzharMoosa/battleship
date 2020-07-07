import React, { useState, createContext } from "react";

export const PlayersContext = createContext();

export const PlayersProvider = (props) => {
  const [players, usePlayers] = useState([
    { name: "Player", ships: [], board: [] },
    { name: "Computer", ships: [], board: [] },
  ]);

  return (
    <PlayersContext.Provider valu>{props.children}</PlayersContext.Provider>
  );
};
