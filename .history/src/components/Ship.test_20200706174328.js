import Ship from "./Ship";

test("create ship", () => {
  const ship = new Ship(4);
  console.log(ship.getShip());
  expect(ship.getShip()).toBe([false, false, false, false]);
});
