import React, {useEffect, useState} from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 100);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const startStop = () => {
    setIsRunning(!isRunning);
  };

  const reset = () => {
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = (t) => {
    const seconds = Math.floor(t / 10);
    const ms = t % 10;
    return `${seconds}.${ms} s`;
  };

  return (
    <div>
      <h2>9. Stopwatch</h2>
      <h3>{formatTime(time)}</h3>
      <button onClick={startStop} style={{marginRight: "10px"}}>
        {isRunning ? "Pause" : "Start"}
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Stopwatch;
