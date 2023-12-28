import React from "react";
const Items = ({ name, description, image }) => {
  return (
    <div className="card">
      <img
        src={image}
        alt={image}
      />
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Items;
