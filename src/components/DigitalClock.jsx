import React, {useEffect, useState} from "react";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>5. Digital Clock</h2>
      <h3
        style={{
          textAlign: "center",
          background: "white",
          borderRadius: "8px",
          padding: "10px",
          margin: "0px 110px",
        }}
      >
        {time.toLocaleTimeString()}
      </h3>
    </div>
  );
};

export default DigitalClock;
