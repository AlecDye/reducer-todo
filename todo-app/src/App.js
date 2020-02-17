import React, { useState } from 'react';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

import './App.css';

export default function App() {
  const [state, setState] = useState();

  return (
    <div>
      <TodoForm />
      <TodoList />
    </div>
  )
}

export default App;
