import React, { useState, useReducer } from 'react';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

import './App.css';

const todoList = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Test Data',
    id: 1528817077234,
    completed: false
  }
]

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: todoList
    }
  }

  toggleItem = clickedId => {
    const NewTodoList = this.state.todoList.map(item => {
      if (item.id === clickedId) {
        return {
          ...item,
          completed: !item.completed
        }
      } else {
        return item;
      }
    })
    this.setState({
      todoList: NewTodoList
    })
  }

  addNewItem = itemText => {
    const newItem = {
      task: itemText,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todoList: [...this.state.todoList, newItem]
    })
  }

  clearCompleted = () => {
    const completedTasks = this.state.todoList.filter(item => {
      if (item.completed === false) {
        return {
          item
        }
      }
    })
    this.setState({
      todoList: completedTasks
    })
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Todo for Today!</h1>
          <TodoForm addNewItem={this.addNewItem} />
        </div>
        <TodoList todoList={this.state.todoList} toggleItem={this.toggleItem} clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App;
