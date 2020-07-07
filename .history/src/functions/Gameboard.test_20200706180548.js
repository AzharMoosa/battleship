import Gameboard from "./Gameboard";

test("create ship", () => {
  const ship = new Ship(4);
  expect(ship.getShip()).toEqual([false, false, false, false]);
});
