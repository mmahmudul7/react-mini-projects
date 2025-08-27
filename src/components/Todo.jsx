import React, {useState} from "react";

const Todo = () => {
  const [task, setTask] = useState(""); // input state
  const [tasks, setTasks] = useState([]); //Holding all tasks

  const addTask = () => {
    if (task.trim() !== "") {
      // if input is empty then don't add
      setTasks([...tasks, task]); // old task + new task
      setTask(""); // input clear
    }
  };

  const resetTasks = () => {
    setTasks([]); // Clear all task
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)} // typing handle
        placeholder="Enter a task"
      />
      <button
        onClick={addTask}
        style={{marginLeft: "10px", marginRight: "10px"}}
      >
        Add
      </button>
      <button
        onClick={resetTasks}
        style={{background: "#C02B21", color: "white"}}
      >
        Reset
      </button>

      <ul style={{listStyle: "none", padding: 0}}>
        {tasks.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
