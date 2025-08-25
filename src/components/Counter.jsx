import React, {useState} from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter App</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)} style={{marginLeft: "10px"}}>
        Decrease
      </button>
      <button onClick={() => setCount(0)} style={{marginLeft: "10px"}}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
