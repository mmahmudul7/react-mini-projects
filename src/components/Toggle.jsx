import React, {useState} from "react";

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  //   const handleToggle = () => {
  //     setIsOn(!isOn);
  //   };

  return (
    <div>
      <h2>Toggle Button</h2>

      <button
        onClick={() => setIsOn(!isOn)}
        style={{
          padding: "10px 20px",
          backgroundColor: isOn ? "#22c55e" : "#C02B21",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {isOn ? "ON" : "OFF"}
      </button>
    </div>
  );
};

export default Toggle;
