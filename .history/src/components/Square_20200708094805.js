import React from "react";

const Square = ({ elm, attackComputer }) => {
  const getBoardElm = () => {
    if (elm !== "") {
      return "square ship";
    } else if (elm.ship.includes(true)) {
    } else {
      return "square";
    }
  };
  return <div className={getBoardElm()} onClick={attackComputer}></div>;
};

export default Square;
