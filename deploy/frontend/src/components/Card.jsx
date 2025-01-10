import React from 'react';

const Card = ({ name , price }) => {
  return (
    <div className="card">
      
      <h2>{name}</h2>
      <p>{price}</p>
    </div>
  );
};

export default Card;