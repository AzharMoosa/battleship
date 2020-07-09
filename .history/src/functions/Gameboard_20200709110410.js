const Gameboard = () => {
  let previousShots = [];
  const grid = new Array(8).fill("");
  for (let i = 0; i < grid.length; i++) {
    grid[i] = new Array(8).fill("");
  }

  const getGrid = () => {
    return grid;
  };

  const getPreviousShots = () => {
    return previousShots;
  };

  const placeShip = (x, y, ship, orientation) => {
    // Horizontal Orientation = 0
    // Vertical Orientation = 1

    // Check If Ship Fits
    let shipLength = ship.length;

    // grid[y][i] !== "" ||

    // grid[i][x] !== "" ||

    if (orientation === 0) {
      for (let i = x; i < x + ship.length; i++) {
        if (x + shipLength > 8) {
          return false;
        }
        // if (grid[x][i] !== "") {
        //   return false;
        // }
        grid[x][i] = ship;
        ship.setShipCoords(x, i);
      }
    } else if (orientation === 1) {
      for (let i = y; i < y + ship.length; i++) {
        if (y + shipLength > 8) {
          return false;
        }
        if (grid[i][y] !== "") {
          return false;
        }
        grid[i][y] = ship;
        ship.setShipCoords(i, y);
      }
    }
    return true;
  };

  const flatten = (arr) => {
    return arr.join(" |-| ");
  };

  const receiveAttack = (x, y) => {
    // Check if ship is at position
    if (grid[x][y] !== "") {
      let ship = grid[x][y];
      let shipCoords = ship.getShipCoords();
      let arrSearch = shipCoords.map((row) => {
        return flatten(row);
      });
      let pos = arrSearch.indexOf(flatten([x, y]));
      if (!ship.isHit(pos)) {
        ship.hit(pos);
        return true;
      }
    }
    previousShots.push([x, y]);
    return false;
  };

  const allShipSunk = (ships) => {
    for (let i = 0; i < ships.length; i++) {
      if (!ships[i].isSunk()) {
        return false;
      }
    }

    return true;
  };

  return {
    grid,
    previousShots,
    getGrid,
    placeShip,
    receiveAttack,
    getPreviousShots,
    allShipSunk,
  };
};

export default Gameboard;
