import Ship from "./Ship";

test("create ship", () => {
  const ship = new Ship(4);
  expect(ship.getShip()).toEqual([false, false, false, false]);
});

test("hit ship", () => {
  const ship = new Ship(4);
  ship.hit(2);
  expect(ship.getShip()).toEqual([false, false, true, false]);
});

test("ship sunk", () => {
  const ship = new Ship(3);
  ship.hit(0);
  ship.hit(1);
  ship.hit(2);
  expect(ship.isSunk()).toEqual([false, true, true]);
});
