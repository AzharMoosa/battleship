import React from "react";

const Square = ({ row }) => {
  const getBoardElm = () => {
    console.log(row);
  };
  return <div className='square' onClick={getBoardElm}></div>;
};

export default Square;
