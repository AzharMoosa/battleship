import Gameboard from "./Gameboard";
import Player from "./Player";
import Ship from "./Ship";

test("player wins", () => {
  let player = new Player(false);
  let computer = new Player(true);

  let playerBoard = new Gameboard();
  let computerBoard = new Gameboard();

  const ship = new Ship("Destroyer", 1);
  const shipTwo = new Ship("Destroyer", 1);

  playerBoard.placeShip(0, 0, ship, 0);
  computerBoard.placeShip(0, 0, shipTwo, 1);

  player.attackEnemy(computerBoard, 0, 0);
  computer.computerAttack(playerBoard, 0, 0);
  player.attackEnemy(computerBoard, 0, 4);
  computer.computerAttack(playerBoard);
  player.attackEnemy(computerBoard, 0, 1);

  expect(computerBoard.allShipSunk([shipTwo])).toEqual(true);
});
