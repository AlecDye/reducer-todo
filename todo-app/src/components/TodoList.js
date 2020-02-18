import React from "react";
import { Todo } from "./Todo";

const TodoList = (props) => {
    // const [state, dispatch] = useReducer();
    // const handleClear = () => {
    //     dispatch({ type: "CLEAR_COMPLETED" })
    // }
    // map props into Todo component; DONT FORGET RETURN!
    return (
        <div>
            {props.state.map((event, index) => {
                return (
                    <Todo key={index} state={event} handleToggle={props.handleToggle} />
                )
            })}
            {/* <button onClick={handleClear}>Clear Completed Tasks</button> */}
        </div>
    )
}

export default TodoList;
// import React, { useReducer } from "react";
// import Todo from "./Todo"
// import { todoReducer, initialState } from "../reducers/todoReducer";


// const TodoList = () => {
//     const [state, dispatch] = useReducer(todoReducer, initialState);
//     return (
//         <div>{state.todoEntries.map(todoObj => {
//             return (
//                 <Todo
//                     key={todoObj.id}
//                     item={todoObj.item}
//                     completed={todoObj.completed}
//                     id={todoObj.id}
//                 />
//                 //     <div>
//                 //         <p>{todoObj.item}</p>
//                 //     </div>
//             )
//         })}
//             <button>
//                 Clear Completed Tasks
//         </button>
//         </div>
//     )
// }

// export default TodoList;