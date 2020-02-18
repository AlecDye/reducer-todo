import React, { useState, useReducer } from "react";
import { todoReducer, initialState } from "../reducers/todoReducer";

import "./Todo.css";

const Todo = (props) => {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    console.log("Todo.js props", props)
    return (
        <div
            onClick={() => dispatch({ type: "TOGGLE_TODO", payload: props.id })}
        >
            <p>{props.item}</p>
        </div>
    )
}

export default Todo;