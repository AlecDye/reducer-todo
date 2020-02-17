import React, { useReducer } from "react";
import Todo from "./Todo"
import { todoReducer, initialState } from "../reducers/todoReducer";

//* introduce state in this component => Todo.js; form doesn't need it

const TodoList = (props) => {
    // const [state, setState] = useState();
    const [state, dispatch] = useReducer(todoReducer, initialState);
    console.log(state, dispatch)
    return (
        <div>{state.todoEntries.map(todoObj => (
            <Todo
                key={todoObj.id}
                item={todoObj.item}
            />
        ))}
            <button>
                Clear Completed Tasks
            </button>
        </div>
    )
}

export default TodoList;