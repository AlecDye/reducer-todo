export const initialState = {
    todoEntries: [
        {
            item: "Walk the doggo",
            completed: false,
            id: Date.now()
        }
    ]
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                todoEntries: [...state.todoEntries, action.payload]
            };
        case "TOGGLE_TODO":
            // map over todoEntries looking for id that matches the payload and toggles completed property
            return {
                todoEntries: state.todoEntries.map(item => item.id === action.payload ? { ...item, completed: !item.completed } : item)
                // state.todoEntries.map(item => {
                // if (item.id === action.payload.id) {
                //     return { ...item, completed: !item.completed }
                // } else {
                //     return item
                // }
            }
        case "CLEAR_COMPLETED":
            return {
                todoEntries: state.list.filter(item => !item.completed)
            }
        default:
            return state;
    }
}