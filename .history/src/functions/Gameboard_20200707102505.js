const Gameboard = () => {
  const grid = new Array(8).fill("");
  for (let i = 0; i < grid.length; i++) {
    grid[i] = new Array(8).fill("");
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

  const receiveAttack = (x, y) => {
    // Go through grid
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        // Check if ship is at position
        if (grid[i][j] !== "") {
          let ship = grid[i][j];
          ship.hit(i);
          return true;
        }
      }
    }

    return false;
  };

  return { grid, getGrid, placeShip, receiveAttack };
};

export default Gameboard;
