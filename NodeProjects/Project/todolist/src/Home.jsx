import React from "react";
import { useState } from "react";

const Home = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <h2>Todo List</h2>
      <Create />
      {todos.length === 0 ? (
        <div>
          ,<H2>No record</H2>
        </div>
      ) : (
        todos.map((todo) => <div>{todo}</div>)
      )}
    </div>
  );
};

export default Home;
