import Ship from "./Ship";

const Player = (ai) => {
  let previousShots = [];

  // Create Ships
  let carrier = Ship("Carrier", 5);
  let battleship = Ship("Battleship", 4);
  let cruiser = Ship("Cruiser", 3);
  let submarine = Ship("Submarine", 3);
  let destroyer = Ship("Destroyer", 2);
  let ships = [carrier, battleship, cruiser, submarine, destroyer];

  const attackEnemy = (enemyBoard, x, y) => {
    if (!previousShots.includes([x, y])) {
      enemyBoard.receiveAttack(x, y);
      previousShots.push([parseInt(x), parseInt(y)]);
      return true;
    }
    return false;
  };

  const getRandomCoords = (gameboard) => {
    let maximum = 7;
    let minimum = 0;
    let x = 0;
    let y = 0;
    const checkBoard = () => {
      gameboard.grid.map((col, j) => {
        col.map((i) => {
          console.log(i);
        });
      });
    };
    do {
      x = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
      y = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
      checkBoard(x, y);
    } while (previousShots.includes([x, y]));
    return `${x},${y}`;
  };

  const computerAttack = (enemyBoard, x, y) => {
    enemyBoard.receiveAttack(x, y);
    previousShots.push([x, y]);
  };

  return { previousShots, ships, attackEnemy, computerAttack, getRandomCoords };
};

export default Player;
