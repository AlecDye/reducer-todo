import React from "react";
// import { todoReducer, initialState } from "../reducers/todoReducer";


export const Todo = (props) => {
    // const [state, dispatch] = useReducer(todoReducer, initialState);
    // console.log("Todo.js props", props)
    return (
        <div
            className={props.state.completed ? "toggled" : " "}
            onClick={event => {
                event.preventDefault();
                props.handleToggle(props.state.id)
            }}
        >
            <p>{props.state.item}</p>
        </div>
        // <div
        //     onClick={() => dispatch({ type: "TOGGLE_TODO", payload: props.id })}
        // >
        //     <p>{props.item}</p>
        // </div>
    )
}
// export default Todo;