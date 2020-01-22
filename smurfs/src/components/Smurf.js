import React from "react";

const Smurf = ({ smurf }) => {
  return (
    <div>
      <h1>{smurf.name}</h1>
      <p>Age: {smurf.age}</p>
      <p>Height: {smurf.height}</p>
    </div>
  );
};

export default Smurf;
