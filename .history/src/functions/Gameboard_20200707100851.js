const Gameboard = () => {
  const grid = new Array(8);
  for (let i = 0; i < grid.length; i++) {
    grid[i] = new Array(8);
  }

  const getGrid = () => {
    return grid;
  };

  const placeShip = (x, y, ship, orientation) => {
    // Horizontal Orientation = 0
    // Vertical Orientation = 1

    // Check If Ship Fits
    let shipLength = ship.length;

    if (x + shipLength > 8) {
      return false;
    } else if (y + shipLength > 8) {
      return false;
    }

    return x + shipLength > 8 ? true : false;

    if (orientation === 0) {
      for (let i = x; i < x + ship.length; i++) {
        grid[i][y] = ship;
        return true;
      }
    } else if (orientation === 1) {
      for (let i = y; i < y + ship.length; i++) {
        grid[x][i] = ship;
        return true;
      }
    }
  };

  return { grid, getGrid, placeShip };
};

export default Gameboard;
