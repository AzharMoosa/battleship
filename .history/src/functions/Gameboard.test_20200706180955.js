import Gameboard from "./Gameboard";

test("create board", () => {
  const board = new Gameboard();
  expect(board.grid.length).toEqual(8);
});
