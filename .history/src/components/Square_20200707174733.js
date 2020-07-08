import React from "react";

const Square = ({ col, row }) => {
  const getBoardElm = () => {
    console.log("col:" + col);
    console.log("row:" + row);
  };
  return <div className='square' onClick={getBoardElm}></div>;
};

export default Square;
