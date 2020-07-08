const Ship = (name, length) => {
  // Fills ship with false
  const ship = new Array(length).fill(false);
  let shipCoords = [];

  // Hit
  const hit = (pos) => (ship[pos] = true);

  // If Ship Sunk
  const isSunk = () => {
    console.log(ship[0]);
    return ship.every((val, i, ship) => val === ship[0]);
  };

  const isHit = (pos) => {
    return ship[pos] === true ? true : false;
  };

  // Returns ship
  const getShip = () => {
    return ship;
  };

  const setShipCoords = (x, y) => {
    shipCoords.push([x, y]);
  };

  const getShipCoords = (x, y) => {
    return shipCoords;
  };

  return {
    name,
    ship,
    length,
    hit,
    isSunk,
    isHit,
    getShip,
    setShipCoords,
    getShipCoords,
  };
};

export default Ship;
