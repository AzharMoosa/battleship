import React from "react";

const Square = ({ elm }) => {
  const getBoardElm = () => {
    if (elm !== " ") {
      return "place";
    } else {
      return "square";
    }
  };
  return <div className='square' onClick={getBoardElm}></div>;
};

export default Square;
