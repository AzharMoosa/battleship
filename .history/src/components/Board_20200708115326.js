import React, { useState } from "react";
import Square from "./Square";
import Player from "../functions/Player";
import Gameboard from "../functions/Gameboard";
import { v4 as uuidv4 } from "uuid";

const Board = () => {
  const [player, setPlayer] = useState(Player(false));
  const [computer, setComputer] = useState(Player(true));
  const [playerBoard, setPlayerBoard] = useState(Gameboard());
  const [computerBoard, setComputerBoard] = useState(Gameboard());
  const [playerTurn, setPlayerTurn] = useState(true);

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

  const flatten = (arr) => {
    return arr.join(" |-| ");
  };

  const getBoardElm = (elm) => {
    if (elm !== "" && elm.ship[0] === true) {
      return "square ship ship-hit";
    } else if () {
    }else {
      return "square";
    }
  };

  const attackComputer = (e) => {
    if (playerTurn === true) {
      let updatedBoard = computerBoard;
      // Get Coord
      let coords = e.target.id.split(",");
      let x = coords[1];
      let y = coords[0];
      player.attackEnemy(updatedBoard, parseInt(x), parseInt(y));
      if (computerBoard.grid[x][y] === "") {
        e.target.classList.add("ship-miss");
      } else {
        e.target.classList.add("ship-hit");
      }
      setComputerBoard(updatedBoard);
      setPlayerTurn(false);
    }
    computerTurn();
  };

  const computerTurn = () => {
    if (playerTurn === true) {
      let updatedBoard = playerBoard;
      let randomCoords = computer.getRandomCoords();
      // let square = useRef(randomCoords.split(","));
      let coords = randomCoords.split(",");
      let x = coords[1];
      let y = coords[0];
      computer.computerAttack(updatedBoard, 0, 0);
      setPlayerBoard(updatedBoard);
      console.log(playerBoard);
      setPlayerTurn(true);
    }
  };

  return (
    <div className='game-boards'>
      {startGame()}
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

      <div className='game-board comp'>
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
