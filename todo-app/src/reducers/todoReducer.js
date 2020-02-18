export const initialState = {
    todoEntries: [
        {
            item: 'Cook dinner @ 5pm',
            completed: false,
            id: 12345
        },
        {
            item: 'Do Laundry',
            completed: false,
            id: 12346
        }
    ]
}

export const todoReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            console.log(state, action)
            const newTodo = {
                item: action.payload,
                completed: false,
                id: Date.now()
            }
            return {
                ...state,
                // item: action.payload
                todoEntries: [...state.todoEntries, newTodo]
            };
        // case "TOGGLE_TODO":
        //     return {
        //         ...state,

        //     }
        default:
            return state;
    }
}

//? ADD_TASK, TOGGLE_TASK, CLEAR_COMPLETED action cases?
