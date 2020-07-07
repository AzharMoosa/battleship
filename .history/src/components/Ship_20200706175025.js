const Ship = (length) => {
  // Fills ship with false
  const ship = new Array(length).fill(false);

  // Hit
  const hit = (pos) => (ship[pos] = true);

  // If Ship Sunk
  const isSunk = () => {
    getShip().every((val, i, arr) => val === arr[0]);
  };

  // Returns ship
  const getShip = () => {
    return ship;
  };

  return { ship, hit, isSunk, getShip };
};

export default Ship;
