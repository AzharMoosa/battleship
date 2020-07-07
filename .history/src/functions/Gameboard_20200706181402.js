const Gameboard = () => {
  const grid = new Array(8);
  for (let i = 0; i < grid.length; i++) {
    grid[i] = new Array(8);
  }

  const placeShip = (x, y, orientation) => {
    // Horizontal Orientation = 0
    // Vertical Orientation = 1

    if (orientation === 0) {
    }
  };

  return { grid, placeShip };
};

export default Gameboard;
