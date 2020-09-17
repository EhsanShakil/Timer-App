import React, { useState } from "react";
import "./Timer.css";
import TimerButton from "../TimerButton/TimerButton";

const Timer = () => {
  const [minutes, setMinutes] = useState<number>(25);
  const [seconds, setSeconds] = useState<number>(0);
  const [isStart, setIsStart] = useState<boolean>(false);

  const Start = () => {
    // if (isStart === true) {
    //   return;
    // }
    // const myInterval = setInterval(() => {
    //   if (seconds > 0) {
    //     setSeconds(seconds - 1);
    //   }
    //   if (seconds === 0) {
    //     if (minutes === 0) {
    //       clearInterval(myInterval);
    //     } else {
    //       setMinutes(minutes - 1);
    //       setSeconds(59);
    //     }
    //   }
    // }, 1000);
    // setIsStart(true);
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
    <div>
      {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      <TimerButton buttonAction={Start} buttonValue={"Start"} />
      <TimerButton buttonAction={Stop} buttonValue={"Stop"} />
      <TimerButton buttonAction={Reset} buttonValue={"Reset"} />
    </div>
  );
};
export default Timer;
