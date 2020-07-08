import React, { useContext, useEffect } from "react";
import Square from "./Square";
import { v4 as uuidv4 } from "uuid";
import { PlayersContext } from "../context/PlayersContext";

const Board = () => {
  // eslint-disable-next-line
  const [players, setPlayers] = useContext(PlayersContext);

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

  const getBoardElm = (elm) => {
    if (elm !== "") {
      return "square ship";
    } else {
      return "square";
    }
  };

  useEffect(() => {
    startGame();
    let updatedState = [...players];
    setPlayers(updatedState);
    // eslint-disable-next-line
  }, []);

  const attackComputer = (e) => {
    // Get Coord
    let id = e.target.id;
    let coords = id.split(",");
    let x = coords[0];
    let y = coords[1];
    let updatedBoard = computerBoard;
    player.attackEnemy(updatedBoard, parseInt(x), parseInt(y));
    e.target.classList.add("ship-hit");
    let updatedState = [...players];
    updatedState[1].board = updatedBoard;
    setPlayers(updatedState);
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
