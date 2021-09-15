import React, { useEffect, useState } from "react";
import "./App.css";

import axios from "axios";

// email/password

/**
 * 0. ✅ Install axios (HTTP Rest Client)
 * 1. Fetch todos from an Laravel API
 * 2. Add todo to Laravel API
 * 3. Update a todo (Mark as Completed or Mark as not completed)
 * 4. Delete a todo
 */

const API_BASE_URL = "https://jsonplaceholder.typicode.com";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos();
  }, []);

  async function getTodos() {
    const response = await axios.get(`${API_BASE_URL}/posts`);

    console.log(response);

    setTodos(response.data);
  }

  return (
    <>
      <center>
        <h1>Todo App</h1>
      </center>

      <pre>{JSON.stringify(todos, null, 4)}</pre>
    </>
  );
}

export default App;
