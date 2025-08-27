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
    const minutes = Math.floor(t / 600);
    const seconds = Math.floor((t % 600) / 10);
    const ms = t % 10;

    const minStr = String(minutes).padStart(2, "0");
    const secStr = String(seconds).padStart(2, "0");

    return `${minStr}:${secStr}.${ms}`;
  };

  return (
    <div>
      <h2>Stopwatch</h2>
      <h3>{formatTime(time)}</h3>
      <button onClick={startStop} style={{marginRight: "10px"}}>
        {isRunning ? "Pause" : "Start"}
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Stopwatch;
