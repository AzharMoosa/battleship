const Gameboard = () => {
  let missedShot = [];
  const grid = new Array(8).fill("");
  for (let i = 0; i < grid.length; i++) {
    grid[i] = new Array(8).fill("");
  }

  const getGrid = () => {
    return grid;
  };

  const getMissedShot = () => {
    return missedShot;
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
        ship.setShipCoords(i, y);
      }
    } else if (orientation === 1) {
      for (let i = y; i < y + ship.length; i++) {
        grid[x][i] = ship;
        ship.setShipCoords(x, i);
      }
    }
    return true;
  };

  function stringle(arr) {
    return arr.join(" |-| ");
  }

  const receiveAttack = (x, y) => {
    // Check if ship is at position
    if (grid[x][y] !== "") {
      let ship = grid[x][y];
      let shipCoords = ship.getShipCoords();
      var arrSearch = shipCoords.map(function (row) {
        return stringle(row);
      });
      let pos = arrSearch.indexOf(stringle([x, y]));
      if (!ship.isHit(pos)) {
        ship.hit(pos);
        return true;
      }
    }
    missedShot = [x, y];
    return false;
  };

  return { grid, missedShot, getGrid, placeShip, receiveAttack, getMissedShot };
};

export default Gameboard;
