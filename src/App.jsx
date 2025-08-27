import "./App.css";
import Calculator from "./components/Calculator";
import ColorPickerCopy from "./components/ColorPickerCopy";
import Counter from "./components/Counter";
import DigitalClock from "./components/DigitalClock";
import RandomQuote from "./components/RandomQuote";
import TemperatureConverter from "./components/TemperatureConverter";
import Todo from "./components/Todo";
import Toggle from "./components/Toggle";

function App() {
  return (
    <div>
      <h1 style={{textAlign: "center", color: "#22c55e"}}>
        OneSix - React Mini Projects
      </h1>
      <div class="container">
        <Counter />
        <Toggle />
        <Todo />
        <ColorPickerCopy />
        <DigitalClock />
        <Calculator />
        <RandomQuote />
        <TemperatureConverter />
      </div>
    </div>
  );
}

export default App;
