import React, { useState } from "react";
import "./Timer.css";
import TimerButton from "../TimerButton/TimerButton";

const Timer = () => {
  let [minutes, setMinutes] = useState<number>(0);
  let [seconds, setSeconds] = useState<number>(0);
  let [isStart, setIsStart] = useState<boolean>(false);
  let [number, setNumber] = useState<number>(0);

  const Start = () => {
    if (isStart === true) {
      return;
    }
    let myInterval = setInterval(() => {
      if (seconds >= 0) {
        setSeconds(++seconds);

        if (seconds === 10 % 0) {
          setMinutes(++minutes);
          seconds = 0;
        }
      }
    }, 1000);
    setIsStart(true);
    console.log("Start");
  };
  const Stop = () => {
    // clearInterval();
    // setIsStart(false);
    console.log("Stop");
  };

  const Reset = () => {
    console.log("Reset");
  };
  return (
    <div className="container">
      <div className="display">
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </div>
      <div className="buttons">
        <TimerButton buttonAction={Start} buttonValue={"Start"} />
        <TimerButton buttonAction={Stop} buttonValue={"Stop"} />
        <TimerButton buttonAction={Reset} buttonValue={"Reset"} />
      </div>
    </div>
  );
};
export default Timer;
