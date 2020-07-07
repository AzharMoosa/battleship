import Gameboard from "./Gameboard";
import Ship from "./Ship";
import Player from "./Player";

test("create row", () => {
  const board = new Gameboard();
  expect(board.grid.length).toEqual(8);
});
