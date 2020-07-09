import React from "react";

const HitMiss = ({ outcome }) => {
  return (
    <div className='hit-miss'>
      <h1 className='hit-miss-outcome'>{outcome}</h1>
    </div>
  );
};

export default HitMiss;
