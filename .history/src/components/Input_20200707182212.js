import React from "react";

const Input = () => {
  return (
    <div className='input'>
      <input type='number' min='0' max='7' className='input-box' name='x' />
      <input type='number' min='0' max='7' className='input-box' name='y' />
    </div>
  );
};

export default Input;
