import React from "react";

const Square = ({ elm, attackComputer, getBoardElm, id, className }) => {
  return (
    <div
      className={getBoardElm(elm)}
      id={id}
      onClick={attackComputer}
      className={className}
    ></div>
  );
};

export default Square;
