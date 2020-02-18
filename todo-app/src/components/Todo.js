import React from "react";

// import "./Todo.css";

const Todo = (props) => {
    console.log("Todo.js props", props)
    return (
        <div>
            <p>{props.item}</p>
        </div>
    )
}

export default Todo;