import React, { useState } from "react";

const Square = ({ elm, attackComputer, getBoardElm }) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const setCoord = () => {
    let id = x;
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
      id={setCoord}
      onClick={attackComputer}
    ></div>
  );
};

export default Square;
