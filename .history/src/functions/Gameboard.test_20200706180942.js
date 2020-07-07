import Gameboard from "./Gameboard";

test("create board", () => {
  const board = new Gameboard();

  console.log(board.grid);
  expect(board.grid.every((val, i, board) => val === board[0])).toEqual(true);
});
