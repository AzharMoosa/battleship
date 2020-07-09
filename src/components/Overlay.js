import React from "react";

const Overlay = ({ resetGame }) => {
  return (
    <div className='modal'>
      <div className='modal-content-results'>
        <h1 className='winner-name'>Player Wins</h1>
        <button className='btn-primary' onClick={resetGame}>
          Restart
        </button>
      </div>
    </div>
  );
};

export default Overlay;
