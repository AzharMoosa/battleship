import React, { useState } from "react";

const PlaceShip = () => {
  const [carrier, setCarrier] = useState("");
  const [battleship, setBattleship] = useState("");
  const [cruiser, setCruiser] = useState("");
  const [submarine, setSubmarine] = useState("");
  const [destroyer, setDestroyer] = useState("");

  return (
    <div className='start'>
      <div className='start-content'>
        <h1>Welcome to Battleship</h1>
        <div className='coord-inputs'>
          <label htmlFor='carrier'>Carrier</label>
          <input
            type='text'
            onChange={(e) => setCarrier(e.target.value)}
            className='coord-input'
          />
        </div>
      </div>
    </div>
  );
};

export default PlaceShip;
