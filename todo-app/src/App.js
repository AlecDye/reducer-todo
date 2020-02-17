import React from 'react';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

import './App.css';

function App() {
  return (
    <div>
      <TodoForm />
      <TodoList />
    </div>
  )
}

export default App;
