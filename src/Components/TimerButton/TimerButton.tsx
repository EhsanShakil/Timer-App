import React from "react";
import "./TimerButton.css";

const TimerButton = ({ buttonAction }: any, { buttonValue }: any) => {
  return (
    <div onClick={() => buttonAction}>
      <h1>{buttonValue}</h1>
    </div>
  );
};

export default TimerButton;
