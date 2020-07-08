import React from "react";

const PlainSquare = ({ elm, attackComputer, getBoardElm, id }) => {
  return (
    <div className={getBoardElm(elm)} id={id} onClick={attackComputer}></div>
  );
};

export default PlainSquare;
