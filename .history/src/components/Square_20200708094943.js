import React from "react";

const Square = ({ elm, attackComputer, getBoardElm }) => {
  return <div className={getBoardElm(elm)} onClick={attackComputer}></div>;
};

export default Square;
