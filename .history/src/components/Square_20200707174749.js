import React from "react";

const Square = ({ col, row }) => {
  const getBoardElm = () => {
    console.log(col);
    console.log(row);
  };
  return <div className='square' onClick={getBoardElm}></div>;
};

export default Square;
