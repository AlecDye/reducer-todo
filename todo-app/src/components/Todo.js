import React from "react";

import "./Todo.css";

const Todo = props => {
    console.log("Individual todo", props.item)
    return (
        <div
            onClick={() => props.toggleItem(props.item.id)}
            className={`item${props.item.completed ? " completed " : ""}`}
        >
            <p>{props.item.task}</p>
        </div>
    )
}

export default Todo;