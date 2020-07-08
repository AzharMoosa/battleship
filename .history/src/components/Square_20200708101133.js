import React from "react";

const Square = ({ elm, attackComputer, getBoardElm, id, className }) => {
  return (
    <div
      className={getBoardElm(elm) + className}
      id={id}
      onClick={attackComputer}
    ></div>
  );
};

export default Square;
