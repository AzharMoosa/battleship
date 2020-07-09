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

  const updateBoard = () => {};

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
            onChange={(e) => setCarrierY(e.target.value)}
            className='coord-input'
            type='number'
            placeholder='Y'
            min='0'
            max='7'
          />
        </div>
        <div className='coord-inputs'>
          <label htmlFor='battleship'>Battleship</label>
          <input
            type='number'
            placeholder='X'
            min='0'
            max='7'
            onChange={(e) => setBattleshipX(e.target.value)}
            className='coord-input'
          />
          <input
            type='number'
            placeholder='Y'
            min='0'
            max='7'
            onChange={(e) => setBattleshipY(e.target.value)}
            className='coord-input'
          />
        </div>
        <div className='coord-inputs'>
          <label htmlFor='cruiser'>Cruiser</label>
          <input
            type='number'
            placeholder='X'
            min='0'
            max='7'
            onChange={(e) => setCruiserX(e.target.value)}
            className='coord-input'
          />
          <input
            type='number'
            placeholder='Y'
            min='0'
            max='7'
            onChange={(e) => setCruiserY(e.target.value)}
            className='coord-input'
          />
        </div>
        <div className='coord-inputs'>
          <label htmlFor='submarine'>Submarine</label>
          <input
            type='number'
            placeholder='X'
            min='0'
            max='7'
            onChange={(e) => setSubmarineX(e.target.value)}
            className='coord-input'
          />
          <input
            type='number'
            placeholder='Y'
            min='0'
            max='7'
            onChange={(e) => setSubmarineY(e.target.value)}
            className='coord-input'
          />
        </div>
        <div className='coord-inputs'>
          <label htmlFor='destroyer'>Destroyer</label>
          <input
            type='number'
            placeholder='X'
            min='0'
            max='7'
            onChange={(e) => setDestroyerX(e.target.value)}
            className='coord-input'
          />
          <input
            type='number'
            placeholder='Y'
            min='0'
            max='7'
            onChange={(e) => setDestroyerY(e.target.value)}
            className='coord-input'
          />
        </div>
        <button className='btn-primary btn-place' onClick={updateBoard}>
          Place Ships
        </button>
      </div>
    </div>
  );
};

export default PlaceShip;
