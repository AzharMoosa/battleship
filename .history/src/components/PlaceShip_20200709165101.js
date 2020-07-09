import React, { useState } from "react";

const PlaceShip = ({ placeShipOnBoard }) => {
  const [carrierX, setCarrierX] = useState("0");
  const [carrierY, setCarrierY] = useState("0");
  const [carrierO, setCarrierO] = useState("0");
  const [battleshipX, setBattleshipX] = useState("4");
  const [battleshipY, setBattleshipY] = useState("4");
  const [battleshipO, setBattleshipO] = useState("0");
  const [cruiserX, setCruiserX] = useState("3");
  const [cruiserY, setCruiserY] = useState("0");
  const [cruiserO, setCruiserO] = useState("0");
  const [submarineX, setSubmarineX] = useState("5");
  const [submarineY, setSubmarineY] = useState("0");
  const [submarineO, setSubmarineO] = useState("0");
  const [destroyerX, setDestroyerX] = useState("7");
  const [destroyerY, setDestroyerY] = useState("0");
  const [destroyerO, setDestroyerO] = useState("0");

  const updateBoard = () => {
    placeShipOnBoard(
      carrierX,
      carrierY,
      carrierO,
      battleshipX,
      battleshipY,
      battleshipO,
      cruiserX,
      cruiserY,
      cruiserO,
      submarineX,
      submarineY,
      submarineO,
      destroyerX,
      destroyerY,
      destroyerO
    );
  };

  return (
    <div className='start'>
      <div className='start-content'>
        <h1>Welcome to Battleship</h1>
        <div className='headings'>
          <h3>X</h3>
          <h3>Y</h3>
          <h3>Pos(0 - Horizontal | 1 - Vertical)</h3>
        </div>
        <div className='coord-inputs'>
          <label htmlFor='carrier'>Carrier</label>
          <input
            onChange={(e) => setCarrierX(e.target.value)}
            className='coord-input'
            type='number'
            placeholder='X'
            min='0'
            max='7'
            value={carrierX}
          />
          <input
            onChange={(e) => setCarrierY(e.target.value)}
            className='coord-input'
            type='number'
            placeholder='Y'
            min='0'
            max='7'
            value={carrierY}
          />
          <input
            onChange={(e) => setCarrierO(e.target.value)}
            className='coord-input'
            type='number'
            min='0'
            max='1'
            value={carrierO}
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
            value={battleshipX}
          />
          <input
            type='number'
            placeholder='Y'
            min='0'
            max='7'
            onChange={(e) => setBattleshipY(e.target.value)}
            className='coord-input'
            value={battleshipY}
          />
          <input
            onChange={(e) => setBattleshipO(e.target.value)}
            className='coord-input'
            type='number'
            min='0'
            max='1'
            value={battleshipO}
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
            value={cruiserX}
          />
          <input
            type='number'
            placeholder='Y'
            min='0'
            max='7'
            onChange={(e) => setCruiserY(e.target.value)}
            className='coord-input'
            value={cruiserY}
          />
          <input
            onChange={(e) => setCruiserO(e.target.value)}
            className='coord-input'
            type='number'
            min='0'
            max='1'
            value={cruiserO}
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
            value={submarineX}
          />
          <input
            type='number'
            placeholder='Y'
            min='0'
            max='7'
            onChange={(e) => setSubmarineY(e.target.value)}
            className='coord-input'
            value={submarineY}
          />
          <input
            onChange={(e) => setSubmarineO(e.target.value)}
            className='coord-input'
            type='number'
            min='0'
            max='1'
            value={submarineO}
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
            value={destroyerX}
          />
          <input
            type='number'
            placeholder='Y'
            min='0'
            max='7'
            onChange={(e) => setDestroyerY(e.target.value)}
            className='coord-input'
            value={destroyerY}
          />
          <input
            onChange={(e) => setDestroyerO(e.target.value)}
            className='coord-input'
            type='number'
            min='0'
            max='1'
            value={destroyerO}
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
