import React from "react";

const Square = ({ elm, attackComputer, getBoardElm }) => {
  return <div className={getBoardElm()} onClick={attackComputer}></div>;
};

export default Square;
