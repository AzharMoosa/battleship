const Ship = (length) => {
  // Fills ship with false
  const ship = new Array(length).fill(false);

  // Hit
  const hit = (pos) => (ship[pos] = true);

  // If Ship Sunk
  const isSunk = () => {
    ship.every((val, i, ship) => val === ship[0]);
  };

  // Returns ship
  const getShip = () => {
    return ship;
  };

  return { ship, hit, isSunk, getShip };
};

export default Ship;
