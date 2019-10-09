import React from "react";
import NumberButton from "./NumberButton";
import {numbers} from "../../../data";


export default function Numbers(){
  return (
    <div className="btn-container">
      {numbers.map(number =>(
        <button className="btns">{number}</button>
      ))}
    </div>
  );
};