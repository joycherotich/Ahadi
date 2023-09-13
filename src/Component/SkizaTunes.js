import React from 'react';

const SkizaTune = ({ title, skizaCode, price, imageUrl }) => {
  return (
    <div className="skiza-tune">
      <img src={imageUrl} alt={title} className="skiza-image" />
      <h3>{title}</h3>
      <p>Skiza Code: {skizaCode}</p>
      <p>Price: {price}</p>
      <button>Subscribe to Skiza Tune</button>
    </div>
  );
};

export default SkizaTune;
