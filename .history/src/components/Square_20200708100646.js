import React, from "react";

const Square = ({ elm, attackComputer, getBoardElm }) => {
  return (
    <div
      className={getBoardElm(elm)}
      id={setCoord}
      onClick={attackComputer}
    ></div>
  );
};

export default Square;
