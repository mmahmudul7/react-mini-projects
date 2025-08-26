import React, {useState} from "react";

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const calculator = (operator) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) return;

    switch (operator) {
      case "+":
        setResult(a + b);
        break;
      case "-":
        setResult(a - b);
        break;
      case "*":
        setResult(a * b);
        break;
      case "/":
        setResult(b !== 0 ? a / b : "Error");
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <h2>6. Simple Calculator</h2>

      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        style={{marginLeft: "10px"}}
      />

      <div style={{marginTop: "10px", display: "flex", gap: "5px"}}>
        <button onClick={() => calculator("+")}>+</button>
        <button onClick={() => calculator("-")} style={{marginLeft: "5px"}}>
          -
        </button>
        <button onClick={() => calculator("*")} style={{marginLeft: "5px"}}>
          *
        </button>
        <button onClick={() => calculator("/")} style={{marginLeft: "5px"}}>
          /
        </button>

        <h3 style={{margin: "0"}}>Result: {result}</h3>
      </div>
    </div>
  );
};

export default Calculator;
