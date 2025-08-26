import "./App.css";
import Calculator from "./components/Calculator";
import ColorPickerCopy from "./components/ColorPickerCopy";
import Counter from "./components/Counter";
import DigitalClock from "./components/DigitalClock";
import Todo from "./components/Todo";
import Toggle from "./components/Toggle";

function App() {
  return (
    <div>
      <h1 style={{textAlign: "center", color: "#22c55e"}}>
        OneSix - React Mini Projects
      </h1>
      <div class="container">
        <div>
          <Counter />
        </div>
        <div>
          <Toggle />
        </div>
        <div>
          <Todo />
        </div>
        <div>
          <ColorPickerCopy />
        </div>
        <div>
          <DigitalClock />
        </div>
        <div>
          <Calculator />
        </div>
      </div>
    </div>
  );
}

export default App;
