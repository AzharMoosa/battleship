import Gameboard from "./Gameboard";
import Player from "./Player";

test("attack enemy", () => {
  let player = new Player(false);
  let computer = new Player(true);

  let playerBoard = new Gameboard();
  let computerBoard = new Gameboard();

  playerBoard.placeShip(0, 0, player.ships[0], 0);
});
