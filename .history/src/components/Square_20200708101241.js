import React from "react";

const Square = ({ elm, attackComputer, getBoardElm, id }) => {
  return (
    <div className={getBoardElm(elm)} id={id} onClick={attackComputer}></div>
  );
};

export default Square;
