import React, { useReducer } from 'react';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { todoReducer, initialState } from "./reducers/todoReducer";
import './App.css';

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  //* Use this variable in TodoForm
  const handleNewTodo = item => {
    const newTodo = {
      item: item,
      completed: false,
      id: Date.now()
    }
    dispatch({ type: "ADD_TODO", payload: newTodo })
  };
  const handleToggle = item => {
    dispatch({ type: "TOGGLE_TODO", payload: item })
  }
  //TODO: bring individual components to App
  return (
    <div className="App">
      <TodoForm handleNewTodo={handleNewTodo} />
      <TodoList state={state.todoEntries} handleToggle={handleToggle} />
    </div>
  )
}

export default App;
