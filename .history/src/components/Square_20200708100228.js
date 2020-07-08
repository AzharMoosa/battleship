import React from "react";

const Square = ({ elm, attackComputer, getBoardElm, setCoord }) => {
  return (
    <div
      className={getBoardElm(elm)}
      id={setCoord()}
      onClick={attackComputer}
    ></div>
  );
};

export default Square;
