const Gameboard = () => {
  const grid = new Array(8);
  for (let i = 0; i < grid.length; i++) {
    grid[i] = new Array(8);
  }

  const placeShip = (x, y) => {};

  return { grid, placeShip };
};

export default Gameboard;
