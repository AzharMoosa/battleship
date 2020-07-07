const Ship = (length) => {
  // Fills ship with false
  const ship = new Array(length).fill(false);

  // Hit
  const hit = (pos) => (ship[pos] = true);

  // If Ship Sunk
  const isSunk = () => {
    const allEqual = (ship) => ship.every((pos) => pos === ship[0]);
  };

  // Returns ship
  const getShip = () => {
    return ship;
  };

  return { ship, hit, isSunk, getShip };
};

export default Ship;
