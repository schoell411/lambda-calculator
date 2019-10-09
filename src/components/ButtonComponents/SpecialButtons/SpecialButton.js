import React from "react";
// import { directive } from "@babel/types";

const SpecialButton = props => {
  return (
    <button className="special-btn">
      {props.special}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

export default SpecialButton;