const Ship = (length) => {
  // Fills ship with false
  const ship = new Array(length).fill(false);
  let shipCoords = [];

  // Hit
  const hit = (pos) => (ship[pos] = true);

  // If Ship Sunk
  const isSunk = () => {
    return ship.every((val, i, ship) => val === ship[0]);
  };

  const isHit = (pos) => {
    return ship[pos] === true ? true : false;
  };

  // Returns ship
  const getShip = () => {
    return ship;
  };

  const setShipEnd = (x, y) => {
    shipEnd = [x, y];
  };

  const getShipEnd = (x, y) => {
    return shipEnd;
  };

  return {
    ship,
    length,
    hit,
    isSunk,
    isHit,
    getShip,
    setShipEnd,
    getShipEnd,
  };
};

export default Ship;
