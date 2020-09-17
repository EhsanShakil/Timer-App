import React from "react";
import "./TimerButton.css";

const TimerButton = ({ buttonAction, buttonValue }: any) => {
  return (
    <div onClick={buttonAction} className="buttonContainer">
      <p>{buttonValue}</p>
    </div>
  );
};

export default TimerButton;
