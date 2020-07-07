const Ship = require("./Ship");

test("create ship", () => {
  const ship = new Ship(4);
  expect(ship.getShip().toBe([false, false, false, false]));
});
