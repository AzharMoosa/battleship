import Gameboard from "./Gameboard";
import Player from "./Player";
import Ship from "./Ship";

test("attack enemy", () => {
  let player = new Player(false);
  let computer = new Player(true);

  let playerBoard = new Gameboard();
  let computerBoard = new Gameboard();
  const ship = new Ship("Destroyer", 2);

  playerBoard.placeShip(0, 0, player.ships[0], 0);
  playerBoard.placeShip(0, 1, player.ships[1], 0);
  playerBoard.placeShip(0, 2, player.ships[2], 0);
  playerBoard.placeShip(0, 3, player.ships[3], 0);
  playerBoard.placeShip(0, 4, player.ships[4], 0);

  computerBoard.placeShip(0, 0, computer.ships[0], 1);
  computerBoard.placeShip(1, 0, computer.ships[1], 1);
  computerBoard.placeShip(2, 0, computer.ships[2], 1);
  computerBoard.placeShip(3, 0, computer.ships[3], 1);
  computerBoard.placeShip(4, 0, computer.ships[4], 1);

  player.attackEnemy(computerBoard, 0, 0);
  player.attackEnemy(computerBoard, 0, 0);
  player.attackEnemy(computerBoard, 0, 0);
  player.attackEnemy(computerBoard, 0, 0);
});
