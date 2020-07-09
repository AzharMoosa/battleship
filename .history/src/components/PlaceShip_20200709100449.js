import React, { useState } from "react";

const PlaceShip = () => {
  const [carrier, setCarrier] = useState("");

  return (
    <div className='start'>
      <div className='start-content'>
        <h1>Welcome to Battleship</h1>
        <div className='coord-input'></div>
      </div>
    </div>
  );
};

export default PlaceShip;
