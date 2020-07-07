import Gameboard from "./Gameboard";

test("create row", () => {
  const board = new Gameboard();
  expect(board.grid.length).toEqual(8);
});
