import React from "react";

const Overlay = () => {
  return (
    <div className='modal'>
      <div className='modal-content'>
        <h1 className='winner-name'>Player Wins</h1>
        <button className='btn-primary'>Restart</button>
      </div>
    </div>
  );
};

export default Overlay;
