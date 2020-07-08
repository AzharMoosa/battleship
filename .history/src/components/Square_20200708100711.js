import React from "react";

const Square = ({ elm, attackComputer, getBoardElm }) => {
  return (
    <div className={getBoardElm(elm)} id='0' onClick={attackComputer}></div>
  );
};

export default Square;
