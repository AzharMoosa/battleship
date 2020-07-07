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
};

export default Player;
