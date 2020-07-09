import React, { useState, Fragment } from "react";
import Square from "./Square";
import PlainSquare from "./PlainSquare";
import Player from "../functions/Player";
import Gameboard from "../functions/Gameboard";
import Overlay from "./Overlay";
import HitMiss from "./HitMiss";
import PlaceShip from "./PlaceShip";
import { v4 as uuidv4 } from "uuid";

const Board = () => {
  // eslint-disable-next-line
  const [player, setPlayer] = useState(Player(false));
  // eslint-disable-next-line
  const [computer, setComputer] = useState(Player(true));
  const [playerBoard, setPlayerBoard] = useState(Gameboard());
  const [computerBoard, setComputerBoard] = useState(Gameboard());
  const [playerTurn, setPlayerTurn] = useState(true);
  const [game, setGame] = useState(false);

  const getOutcome = (hit) => {
    let outcome = document.querySelector(".hit-miss-outcome");
    if (hit === true) {
      outcome.innerHTML = "Hit!";
    } else {
      outcome.innerHTML = "Miss!";
    }
  };

  // const startGame = () => {
  //   playerBoard.placeShip(0, 0, player.ships[0], 1);
  //   playerBoard.placeShip(4, 4, player.ships[1], 1);
  //   playerBoard.placeShip(3, 0, player.ships[2], 1);
  //   playerBoard.placeShip(5, 0, player.ships[3], 1);
  //   playerBoard.placeShip(7, 0, player.ships[4], 1);

  //   computerBoard.placeShip(0, 0, computer.ships[0], 0);
  //   computerBoard.placeShip(4, 2, computer.ships[1], 0);
  //   computerBoard.placeShip(0, 3, computer.ships[2], 0);
  //   computerBoard.placeShip(3, 5, computer.ships[3], 0);
  //   computerBoard.placeShip(0, 7, computer.ships[4], 0);
  // };

  const placeShipOnBoard = (
    carrierX,
    carrierY,
    battleshipX,
    battleshipY,
    cruiserX,
    cruiserY,
    submarineX,
    submarineY,
    destroyerX,
    destroyerY
  ) => {
    let start = document.querySelector(".start");
    let startContent = document.querySelector(".start-content");
    if (
      playerBoard.placeShip(
        parseInt(carrierX),
        parseInt(carrierY),
        player.ships[0],
        1
      )
    ) {
      playerBoard.placeShip(
        parseInt(carrierX),
        parseInt(carrierY),
        player.ships[0],
        1
      );
    }
    let carrier = playerBoard.placeShip(
      parseInt(carrierX),
      parseInt(carrierY),
      player.ships[0],
      1
    );

    let battleship = playerBoard.placeShip(
      parseInt(battleshipX),
      parseInt(battleshipY),
      player.ships[1],
      1
    );

    let cruiser = playerBoard.placeShip(
      parseInt(cruiserX),
      parseInt(cruiserY),
      player.ships[2],
      1
    );

    let submarine = playerBoard.placeShip(
      parseInt(submarineX),
      parseInt(submarineY),
      player.ships[3],
      1
    );

    let destoryer = playerBoard.placeShip(
      parseInt(destroyerX),
      parseInt(destroyerY),
      player.ships[4],
      1
    );

    computerBoard.placeShip(0, 0, computer.ships[0], 0);
    computerBoard.placeShip(4, 2, computer.ships[1], 0);
    computerBoard.placeShip(0, 3, computer.ships[2], 0);
    computerBoard.placeShip(3, 5, computer.ships[3], 0);
    computerBoard.placeShip(0, 7, computer.ships[4], 0);

    if (carrier && battleship && cruiser && submarine && destoryer) {
      start.style.display = "none";
      setGame(true);
    }
  };

  const getBoardElm = (elm) => {
    if (elm !== "") {
      return "square ship";
    } else {
      return "square";
    }
  };

  const displayModal = (name) => {
    let modal = document.querySelector(".modal");
    let title = document.querySelector(".winner-name");
    let overlay = document.querySelector(".overlay");
    modal.style.display = "block";
    overlay.style.display = "none";
    if (name === "Computer") {
      title.innerHTML = "Computer Wins";
    } else if (name === "Player") {
      title.innerHTML = "Player Wins";
    }
  };

  const resetGame = () => {
    setPlayer(Player(false));
    setComputer(Player(true));
    setPlayerBoard(Gameboard());
    setComputerBoard(Gameboard());
    setPlayerTurn(true);
    setGame(true);
    let modal = document.querySelector(".modal");
    let overlay = document.querySelector(".overlay");
    let outcome = document.querySelector(".hit-miss-outcome");
    let start = document.querySelector(".start");
    modal.style.display = "none";
    overlay.style.display = "grid";
    outcome.innerHTML = "";
    start.style.display = "block";
  };

  const gameOver = () => {
    if (playerBoard.allShipSunk(player.ships)) {
      displayModal("Computer");
      setGame(false);
    } else if (computerBoard.allShipSunk(computer.ships)) {
      displayModal("Player");
      setGame(false);
    }
  };

  const attackComputer = (e) => {
    if (playerTurn === true && game === true) {
      let updatedBoard = computerBoard;
      // Get Coord
      let coords = e.target.id.split(",");
      let x = coords[1];
      let y = coords[0];
      player.attackEnemy(updatedBoard, parseInt(x), parseInt(y));
      if (computerBoard.grid[x][y] === "") {
        e.target.classList.add("ship-miss");
        getOutcome(false);
      } else {
        e.target.classList.add("ship-hit");
        getOutcome(true);
      }
      setComputerBoard(updatedBoard);
      setPlayerTurn(false);
    }
    computerTurn();
  };

  const computerTurn = () => {
    if (playerTurn === true && game === true) {
      let updatedBoard = playerBoard;
      let randomCoords = computer.getRandomCoords();
      let square = document.getElementById(randomCoords);
      let coords = randomCoords.split(",");
      let x = coords[1];
      let y = coords[0];
      computer.computerAttack(updatedBoard, x, y);
      if (playerBoard.grid[x][y] === "") {
        square.classList.add("ship-miss");
      } else {
        square.classList.add("ship-hit");
      }
      gameOver();
      setPlayerBoard(updatedBoard);
      setPlayerTurn(true);
    }
  };

  return (
    <Fragment>
      <PlaceShip placeShipOnBoard={placeShipOnBoard} />
      <div className='container'>
        <HitMiss />
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

          <div className='comp'>
            <div className='game-board comp-board'>
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
            <div className='overlay game-board'>
              {computerBoard.grid.map((col, j) =>
                col.map((elm, i) => <PlainSquare key={uuidv4()} />)
              )}
            </div>
          </div>
        </div>
        <Overlay resetGame={resetGame} />
      </div>
    </Fragment>
  );
};

export default Board;
