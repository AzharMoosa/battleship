import Gameboard from "./Gameboard";

test("create row", () => {
  const board = new Gameboard();
  expect(board.grid.length).toEqual(8);
});

test("create column", () => {
  const board = new Gameboard();
  for (let i = 0; i < 8; i++) {
    expect(board.grid[i].length).toEqual(8);
  }
});
