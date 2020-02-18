import React, { useReducer } from "react";
import Todo from "./Todo"
import { todoReducer, initialState } from "../reducers/todoReducer";

//* introduce state in this component => Todo.js; form doesn't need it

const TodoList = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    return (
        <div>{state.todoEntries.map(todoObj => {
            return (
                <Todo
                    key={todoObj.id}
                    item={todoObj.item}
                    completed={todoObj.completed}
                    id={todoObj.id}
                />
                //     <div>
                //         <p>{todoObj.item}</p>
                //     </div>
            )
        })}
            <button>
                Clear Completed Tasks
        </button>
        </div>
    )
}

export default TodoList;