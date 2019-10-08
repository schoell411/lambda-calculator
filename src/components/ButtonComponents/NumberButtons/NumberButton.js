import React from "react";

const NumberButton = props => {
  return (
    <button className="numberButton">
      {props.buttonValue}
    </button>
  );
};

export default NumberButton;
