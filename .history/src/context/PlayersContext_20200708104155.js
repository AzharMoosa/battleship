import React, { useState, createContext } from "react";
import Player from "../functions/Player";
import Gameboard from "../functions/Gameboard";

export const PlayersContext = createContext();

export const PlayersProvider = (props) => {
  const [players, usePlayers] = useState([
    // Player
    {
      player: Player(false),
      board: Gameboard(),
    },
    // Computer
    {
      player: Player(true),
      board: Gameboard(),
    },
  ]);

  let playerBoard = players[0].board;
  let computerBoard = players[1].board;
  let player = players[0].player;
  let computer = players[1].player;

  const startGame = () => {
    playerBoard.placeShip(0, 0, player.ships[0], 1);
    playerBoard.placeShip(4, 4, player.ships[1], 1);
    playerBoard.placeShip(3, 0, player.ships[2], 1);
    playerBoard.placeShip(5, 0, player.ships[3], 1);
    playerBoard.placeShip(7, 0, player.ships[4], 1);

    computerBoard.placeShip(0, 0, computer.ships[0], 0);
    computerBoard.placeShip(4, 2, computer.ships[1], 0);
    computerBoard.placeShip(0, 3, computer.ships[2], 0);
    computerBoard.placeShip(3, 5, computer.ships[3], 0);
    computerBoard.placeShip(0, 7, computer.ships[4], 0);
  };

  return (
    <PlayersContext.Provider value={[players, usePlayers]}>
      {startGame()}
      {props.children}
    </PlayersContext.Provider>
  );
};
