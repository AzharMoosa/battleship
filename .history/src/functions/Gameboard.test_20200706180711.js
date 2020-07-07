import Gameboard from "./Gameboard";

test("create ship", () => {
  const board = new Gameboard();
  for (let i = 0; i < 8; i++) {
    board[i].fill(false);
  }
  expect(board).toEqual(trye);
});
