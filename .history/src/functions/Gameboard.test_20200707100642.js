import Gameboard from "./Gameboard";
import Ship from "./Ship";

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

test("place ships", () => {
  const board = new Gameboard();
  const ship = new Ship(3);
  expect(board.placeShip(0, 0, ship, 0)).toEqual(true);
});
