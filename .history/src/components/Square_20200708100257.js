import React from "react";

const Square = ({ elm, attackComputer, getBoardElm, setCoord }) => {
  const setCoord = () => {
    let id = `[${x},${y}]`;
    if (x === 7) {
      setX(0);
    } else if (y === 7) {
      setY(0);
      setX(x + 1);
    }
    setX(y + 1);
    return id;
  };
  return (
    <div
      className={getBoardElm(elm)}
      id={setCoord()}
      onClick={attackComputer}
    ></div>
  );
};

export default Square;
