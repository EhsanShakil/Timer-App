import React, { useState } from "react";
import "./Timer.css";
import TimerButton from "../TimerButton/TimerButton";

const Timer = () => {
  const [minutes, setMinutes] = useState<number>(25);
  const [seconds, setSeconds] = useState<number>(0);
  const [isStart, setIsStart] = useState<boolean>(false);

  const Start = () => {
    if (isStart === true) {
      return;
    }
    const myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    setIsStart(true);
  };
  const Stop = () => {
    clearInterval(myInterval);
    setIsStart(false);
  }
  };
  const Reset = () => {
    Stop()
  };
  return (
    <div>
      <h1>
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        <TimerButton buttonAction={Start} buttonValue={"Start"} />
        <TimerButton buttonAction={Stop} buttonValue={"Start"} />
        <TimerButton buttonAction={Reset} buttonValue={"Start"} />
      </h1>
    </div>
  );
};
export default Timer;
