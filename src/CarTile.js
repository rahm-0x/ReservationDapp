import React from 'react';
import './CarTile.css'; // This CSS file should be in the same directory as this JS file

const CarTile = ({ name, brand, imageUrl }) => {
  return (
    <div className="car-tile">
      {/* Inline styles for background images must have correct paths */}
      <div className="car-image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="car-info">
        <h2>{name}</h2>
        <p className='car-maker'>{brand}</p>
      </div>
    </div>
  );
};

export default CarTile;
