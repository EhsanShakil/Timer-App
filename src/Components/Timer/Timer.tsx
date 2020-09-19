import React, { useState } from "react";
import "./Timer.css";
import TimerButton from "../TimerButton/TimerButton";

const Timer = () => {
  let [minutes, setMinutes] = useState<number>(0);
  let [seconds, setSeconds] = useState<number>(0);
  let [isStart, setIsStart] = useState<boolean>(false);
  let [myInterval, setMyInterval] = useState<any>(0);

  let interval: number = 1000;

  const Start = () => {
    if (isStart === true) {
      return;
    }

    setMyInterval(
      setInterval(() => {
        if (seconds >= 0) {
          setSeconds(++seconds);

          if (seconds === 60) {
            setMinutes(++minutes);
            seconds = 0;
          }
        }
      }, interval)
    );

    console.log("Start");
    setIsStart(true);
  };
  const Stop = () => {
    clearInterval(myInterval);

    setIsStart(false);
    console.log("Stop");
  };

  const Reset = () => {
    Stop();
    setMinutes(0);
    setSeconds(0);
  };
  return (
    <div className="container">
      <div className="display">
        <div className="minutes">
          <p className="text">Minutes</p>
          {minutes < 10 ? `0${minutes}` : minutes}
        </div>
        <div className="collon">:</div>
        <div className="seconds">
          <p className="text">Seconds</p>
          {seconds < 10 ? `0${seconds}` : seconds}
        </div>
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
