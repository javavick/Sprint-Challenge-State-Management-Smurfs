import React from "react";
import Smurf from "./Smurf.js";

const Smurfs = (props) => {
  return props.data.map((item) => {
    return <Smurf smurf={item} />;
  });
};

export default Smurfs;
