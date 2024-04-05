import { useEffect, useState } from "react";
import axios from "axios";

const api_base = "http://localhost:3001";

function App() {
  const [todos, setTodos] = useState([]);
  const [popupActive, setPopupActive] = useState(false);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    GetTodos();
  }, []);

  const GetTodos = () => {
    axios
      .get(api_base + "/todos")
      .then((response) => setTodos(response.data))
      .catch((error) => console.error("Error: ", error));
  };

  const completeTodo = async (id) => {
    try {
      const response = await axios.put(api_base + "/todo/complete/" + id);
      const data = response.data;

      setTodos((todos) =>
        todos.map((todo) => {
          if (todo._id === data._id) {
            todo.complete = data.complete;
          }
          return todo;
        })
      );
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  const addTodo = async () => {
    try {
      const response = await axios.post(api_base + "/todo/new", {
        text: newTodo,
      });
      const data = response.data;

      setTodos([...todos, data]);
      setPopupActive(false);
      setNewTodo("");
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      const response = await axios.delete(api_base + "/todo/delete/" + id);
      const data = response.data;

      setTodos((todos) => todos.filter((todo) => todo._id !== data.result._id));
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  return (
    <div className="App">
      <h1>Welcome, Rithvik</h1>
      <h4>Your tasks</h4>

      <div className="todos">
        {todos.length > 0 ? (
          todos.map((todo) => (
            <div
              className={"todo" + (todo.complete ? " is-complete" : "")}
              key={todo._id}
              onClick={() => completeTodo(todo._id)}
            >
              <div className="checkbox"></div>

              <div className="text">{todo.text}</div>

              <div className="delete-todo" onClick={() => deleteTodo(todo._id)}>
                x
              </div>
            </div>
          ))
        ) : (
          <p>You currently have no tasks</p>
        )}
      </div>

      <div className="addPopup" onClick={() => setPopupActive(true)}>
        +
      </div>

      {popupActive ? (
        <div className="popup">
          <div className="closePopup" onClick={() => setPopupActive(false)}>
            X
          </div>
          <div className="content">
            <h3>Add Task</h3>
            <input
              type="text"
              className="add-todo-input"
              onChange={(e) => setNewTodo(e.target.value)}
              value={newTodo}
            />
            <div className="button" onClick={addTodo}>
              Create Task
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
