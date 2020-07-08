import React, { useEffect, useState } from "react";
import Square from "./Square";
import Player from "../functions/Player";
import Gameboard from "../functions/Gameboard";
import { v4 as uuidv4 } from "uuid";
import { PlayersContext } from "../context/PlayersContext";

const Board = () => {
  const [player, setPlayer] = useState(Player(false));
  const [computer, setComputer] = useState(Player(true));
  const [playerBoard, setPlayerBoard] = useState(Gameboard());
  const [computerBoard, setComputerBoard] = useState(Gameboard());

  const startGame = () => {
    let boardOne = { ...playerBoard };
    let computerBoard = { ...computerBoard };
    let player = { ...player };
    let computer = { ...computer };

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

  const getBoardElm = (elm) => {
    if (elm !== "") {
      return "square ship";
    } else {
      return "square";
    }
  };

  const attackComputer = (e) => {
    let computerBoard = { ...computerBoard };
    let player = { ...player };
    let updatedBoard = computerBoard;

    // Get Coord
    let id = e.target.id;
    let coords = id.split(",");
    let x = coords[0];
    let y = coords[1];
    player.attackEnemy(updatedBoard, parseInt(x), parseInt(y));
    e.target.classList.add("ship-hit");
  };

  return (
    <div className='game-boards'>
      <div className='game-board'>
        {playerBoard.grid.map((col, j) =>
          col.map((elm, i) => (
            <Square
              key={uuidv4()}
              elm={elm}
              getBoardElm={getBoardElm}
              id={`${i},${j}`}
            />
          ))
        )}
      </div>

      <div className='game-board'>
        {computerBoard.grid.map((col, j) =>
          col.map((elm, i) => (
            <Square
              key={uuidv4()}
              elm={elm}
              getBoardElm={getBoardElm}
              attackComputer={attackComputer}
              id={`${i},${j}`}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Board;
