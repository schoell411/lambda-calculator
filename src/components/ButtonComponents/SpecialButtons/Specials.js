import React, {useState} from "react";
import {specials} from "../../../data";
import SpecialButton from "./SpecialButton";
//import any components needed

//Import your array data to from the provided data file

export default function Specials() {
  // STEP 2 - add the imported data to state
  const [special, setSpecials] = useState(specials);

  return (
    <div className="specials">
      {special.map((special, index) => (
        <SpecialButton key={index} special={special} />
      ))}
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};
