const Ship = (length) => {
  // Fills ship with false
  const ship = new Array(length).fill(false);

  // Hit
  const hit = (pos) => (ship[pos] = true);

  // If Ship Sunk
  const isSunk = () => {
    ship.map((pos) => (pos === true ? true : false));
  };

  // Returns ship
  const getShip = ship;

  return { ship, hit, isSunk, getShip };
};

export default Ship;
