import React, { useState } from "react";

const PlaceShip = () => {
  const [carrierX, setCarrierX] = useState("");
  const [carrierY, setCarrierY] = useState("");
  const [battleshipX, setBattleshipX] = useState("");
  const [battleshipY, setBattleshipY] = useState("");
  const [cruiserX, setCruiserX] = useState("");
  const [cruiserY, setCruiserY] = useState("");
  const [submarineX, setSubmarineX] = useState("");
  const [submarineY, setSubmarineY] = useState("");
  const [destroyerX, setDestroyerX] = useState("");
  const [destroyerY, setDestroyerY] = useState("");

  return (
    <div className='start'>
      <div className='start-content'>
        <h1>Welcome to Battleship</h1>
        <div className='coord-inputs'>
          <label htmlFor='carrier'>Carrier</label>
          <input
            onChange={(e) => setCarrierX(e.target.value)}
            className='coord-input'
            type='number'
            placeholder='X'
            min='0'
            max='7'
          />
          <input
            type='text'
            onChange={(e) => setCarrierY(e.target.value)}
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
          <input
            type='text'
            onChange={(e) => setBattleshipY(e.target.value)}
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
          <input
            type='text'
            onChange={(e) => setCruiserY(e.target.value)}
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
          <input
            type='text'
            onChange={(e) => setSubmarineY(e.target.value)}
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
          <input
            type='text'
            onChange={(e) => setDestroyerY(e.target.value)}
            className='coord-input'
          />
        </div>
      </div>
    </div>
  );
};

export default PlaceShip;
