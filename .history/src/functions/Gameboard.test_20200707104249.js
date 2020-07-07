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

test("place invalid ship", () => {
  const board = new Gameboard();
  const ship = new Ship(3);
  expect(board.placeShip(7, 0, ship, 0)).toEqual(false);
});

test("hit ship", () => {
  const board = new Gameboard();
  const ship = new Ship(3);
  board.placeShip(0, 0, ship, 0);
  console.log(board.getGrid());
  expect(board.receiveAttack(2, 0)).toEqual(true);
});

test("miss ship", () => {
  const board = new Gameboard();
  const ship = new Ship(3);
  board.placeShip(0, 0, ship, 0);
  expect(board.receiveAttack(4, 0)).toEqual(false);
});
