import React, { useState, createContext } from "react";

export const PlayersContext = createContext();

export const PlayersProvider = (props) => {
  const [players, usePlayers] = useState([
    {
      name: "Player",
      ships: [],
      board: [
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
      ],
    },
    { name: "Computer", ships: [], board: [[], [], [], [], [], [], [], []] },
  ]);

  return (
    <PlayersContext.Provider value={[players, usePlayers]}>
      {props.children}
    </PlayersContext.Provider>
  );
};
