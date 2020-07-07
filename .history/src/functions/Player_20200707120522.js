import Ship from "./Ship";

const Player = (ai) => {
  let previousShots = [];

  // Create Ships
  let carrier = new Ship("Carrier", 5);
  let battleship = new Ship("Battleship", 4);
  let cruiser = new Ship("Cruiser", 3);
  let submarine = new Ship("Submarine", 3);
  let destroyer = new Ship("Destroyer", 2);
  let ships = [carrier, battleship, cruiser, submarine, destroyer];

  const attackEnemy = (enemyBoard, x, y) => {
    if (!previousShots.includes([x, y])) {
      enemyBoard.receiveAttack(x, y);
      previousShots.push([x, y]);
      return true;
    }
    return false;
  };

  const computerAttack = (enemyBoard, x, y) => {
    let maximum = 7;
    let minimum = 0;
  do {
    let x = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    let y = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

  } while ()
    enemyBoard.receiveAttack(x, y);
    previousShots.push([x, y]);
  };

  return { previousShots, ships, attackEnemy };
};

export default Player;
