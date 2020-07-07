import React, { useState, createContext } from "react";

export const PlayersContext = createContext();

export const PlayersProvider = (props) => {
  return <PlayersContext.Provider>{props.children}</PlayersContext.Provider>;
};
