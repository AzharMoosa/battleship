import Gameboard from "./Gameboard";
import Player from "./Player";

test("create row", () => {
  const board = new Gameboard();
  expect(board.grid.length).toEqual(8);
});
