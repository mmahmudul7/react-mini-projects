import React, {useState} from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>1. Counter App</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count - 1)}>- Decrease</button>
      <button
        onClick={() => setCount(count + 1)}
        style={{marginLeft: "10px", marginRight: "10px"}}
      >
        + Increase
      </button>

      <button
        onClick={() => setCount(0)}
        style={{background: "#C02B21", color: "white"}}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
