import React, { useState } from "react";
import "./Timer.css";
import TimerButton from "../TimerButton/TimerButton";

const Timer = () => {
  const [minutes, setMinutes] = useState<number>(25);
  const [seconds, setSeconds] = useState<number>(0);
  const [isStart, setIsStart] = useState<boolean>(false);

  const Start = () => {
    console.log("Start");
  };
  const Stop = () => {
    console.log("Stop");
  };
  const Reset = () => {
    console.log("Reset");
  };
  return (
    <div>
      <h1>
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        <TimerButton buttonAction={Start} buttonValue={"Start"} />
      </h1>
    </div>
  );
};
export default Timer;
