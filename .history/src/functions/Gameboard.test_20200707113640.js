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
  board.placeShip(5, 0, ship, 1);
  expect(board.receiveAttack(5, 2)).toEqual(true);
});

test("miss ship", () => {
  const board = new Gameboard();
  const ship = new Ship(3);
  board.placeShip(0, 0, ship, 0);
  expect(board.receiveAttack(4, 0)).toEqual(false);
});

test("missed shots", () => {
  const board = new Gameboard();
  const ship = new Ship(3);
  board.placeShip(0, 0, ship, 0);
  board.receiveAttack(4, 0);
  board.receiveAttack(7, 0);
  expect(board.getMissedShot()).toEqual([
    [4, 0],
    [7, 0],
  ]);
});

test("all ship sunk", () => {
  const board = new Gameboard();
  const ship = new Ship(2);
  const shipTwo = new Ship(2);
  board.placeShip(0, 0, ship, 0);
  board.placeShip(0, 1, shipTwo, 0);
  board.receiveAttack(0, 0);
  board.receiveAttack(1, 0);
  board.receiveAttack(0, 1);
  console.log(shipTwo.getShipCoords());
  board.receiveAttack(0, 0);
  expect(board.allShipSunk([ship, shipTwo])).toEqual(true);
});
