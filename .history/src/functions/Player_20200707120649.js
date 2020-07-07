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
    let x = 0;
    let y = 0;
    do {
      x = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
      y = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    } while (previousShots.includes([x, y]));

    enemyBoard.receiveAttack(x, y);
    previousShots.push([x, y]);
  };

  return { previousShots, ships, attackEnemy, computerAttack };
};

export default Player;
