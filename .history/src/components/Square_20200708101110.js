import React from "react";

const Square = ({ elm, attackComputer, getBoardElm, id, class }) => {
  return (
    <div className={getBoardElm(elm)} id={id} onClick={attackComputer}></div>
  );
};

export default Square;
