import React, { useState } from "react";

const TodoForm = () => {
    const [inputState, setInputState] = useState("");
    return (
        <form onSubmit={event => {
            event.preventDefault();
        }}>
            <input
                type="text"
                name=""
                value={inputState}
                onChange={event => {
                    setInputState(event.target.value)
                }}
            />
            <button type="submit">Add Task</button>
        </form>
    )
}

export default TodoForm;
// import React, { useState, useReducer } from "react";
// import { todoReducer, initialState } from "../reducers/todoReducer";
// import TodoList from "./TodoList";

// const TodoForm = () => {
//     //? state, handleChanges, handleSubmit?
//     const [state, dispatch] = useReducer(todoReducer, initialState);
//     const [newTodo, setNewTodo] = useState("");

//     const handleChanges = event => {
//         setNewTodo(event.target.value)
//     }

//     // const toggleTodo = clickedId => {
//     //     dispatch({
//     //         type: "TOGGLE_TODO", payload: clickedId
//     //     })
//     // }

//     return (
//         <div>
//             <input
//                 className="todo-input"
//                 type="text"
//                 name="newTodo"
//                 value={newTodo}
//                 onChange={handleChanges}
//             />
//             <button
//                 type="submit"
//                 onClick={() => {
//                     dispatch({ type: "ADD_TODO", payload: newTodo })
//                 }}
//             >
//                 Add Task
//             </button>
//             {/* <TodoList /> */}
//             <div>{state.todoEntries.map(todoObj => {
//                 return (
//                     // <Todo
//                     //     key={todoObj.id}
//                     //     item={todoObj.item}
//                     // />
//                     <div>
//                         <p>{todoObj.item}</p>
//                     </div>
//                 )
//             })}
//                 <button>
//                     Clear Completed Tasks
//             </button>
//             </div>
//         </div>
//     )
// }


// export default TodoForm;