import React, { useState, useReducer } from "react";
import { todoReducer, initialState } from "../reducers/todoReducer";
import TodoList from "./TodoList";

const TodoForm = () => {
    //? state, handleChanges, handleSubmit?
    const [state, dispatch] = useReducer(todoReducer, initialState);
    const [newTodo, setNewTodo] = useState("");

    const handleChanges = event => {
        setNewTodo(event.target.value)
    }

    return (
        <div>
            <input
                className="todo-input"
                type="text"
                name="newTodo"
                value={newTodo}
                onChange={handleChanges}
            />
            <button
                onClick={() => {
                    dispatch({ type: "ADD_TODO", payload: newTodo })
                }}
            >
                Add Task
            </button>
            {/* <TodoList /> */}
            <div>{state.todoEntries.map(todoObj => {
                return (
                    // <Todo
                    //     key={todoObj.id}
                    //     item={todoObj.item}
                    // />
                    <div>
                        <p>{todoObj.item}</p>
                    </div>
                )
            })}
                <button>
                    Clear Completed Tasks
            </button>
            </div>
        </div>
    )
}


export default TodoForm;