import React, { useState } from "react";
import "./Timer.css";

const Timer = () => {
  const [minutes, setMinutes] = useState<number>(25);
  const [seconds, setSeconds] = useState<number>(0);
  const [isStart, setIsStart] = useState<boolean>(false);

  return (
    <div>
      <h1>
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </h1>
    </div>
  );
};
export default Timer;
