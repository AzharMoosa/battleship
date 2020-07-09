import React, { useState } from "react";

const PlaceShip = () => {
  const [carrier, setCarrierX] = useState("");
  const [battleship, setBattleshipX] = useState("");
  const [cruiser, setCruiserX] = useState("");
  const [submarine, setSubmarineX] = useState("");
  const [destroyer, setDestroyerX] = useState("");

  return (
    <div className='start'>
      <div className='start-content'>
        <h1>Welcome to Battleship</h1>
        <div className='coord-inputs'>
          <label htmlFor='carrier'>Carrier</label>
          <input
            type='text'
            onChange={(e) => setCarrierX(e.target.value)}
            className='coord-input'
          />
        </div>
        <div className='coord-inputs'>
          <label htmlFor='battleship'>Battleship</label>
          <input
            type='text'
            onChange={(e) => setBattleshipX(e.target.value)}
            className='coord-input'
          />
        </div>
        <div className='coord-inputs'>
          <label htmlFor='cruiser'>Cruiser</label>
          <input
            type='text'
            onChange={(e) => setCruiserX(e.target.value)}
            className='coord-input'
          />
        </div>
        <div className='coord-inputs'>
          <label htmlFor='submarine'>Submarine</label>
          <input
            type='text'
            onChange={(e) => setSubmarineX(e.target.value)}
            className='coord-input'
          />
        </div>
        <div className='coord-inputs'>
          <label htmlFor='destroyer'>Destroyer</label>
          <input
            type='text'
            onChange={(e) => setDestroyerX(e.target.value)}
            className='coord-input'
          />
        </div>
      </div>
    </div>
  );
};

export default PlaceShip;
