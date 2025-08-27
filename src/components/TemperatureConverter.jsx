import React, {useState} from "react";

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState(null);

  const convert = () => {
    const c = parseFloat(celsius);
    if (isNaN(c)) return;
    setFahrenheit((c * 9) / 5 + 32);
  };

  return (
    <div>
      <h2>8. Temperature Converter</h2>
      <input
        type="number"
        value={celsius}
        onChange={(e) => setCelsius(e.target.value)}
        // placeholder="Celsius"
      />
      {"° "}
      <span>Celsius</span>
      <button onClick={convert} style={{marginLeft: "10px"}}>
        Convert
      </button>
      {fahrenheit !== null && (
        <p style={{marginBottom: "0"}}>{fahrenheit}° Fahrenheit</p>
      )}
    </div>
  );
};

export default TemperatureConverter;
