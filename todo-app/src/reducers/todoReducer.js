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
    return state;
}

//? ADD_TASK, TOGGLE_TASK, CLEAR_COMPLETED action cases?
