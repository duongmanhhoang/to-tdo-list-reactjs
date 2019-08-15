import * as type from './../consts/ActionType';

let data = JSON.parse(localStorage.getItem('tasks'));
let initialState = data ? data : [];

let myReducer = (state = initialState, action) => {
    let tasks = state;
    switch (action.type) {
        case type.LIST_ALL:
            return state;
        case type.ADD_TASK:
            let {task} = action;
            state.push(task);
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        case type.UPDATE_STATUS:
            tasks.forEach((task, index) => {
                if (task.id === action.task.id) {
                    task = action.task;
                }
            });
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        case type.DELETE_TASK:
            state = state.filter(task => task.id !== action.task.id);
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        case type.UPDATE_TASK:
            tasks.forEach((task, index) => {
                if (task.id === action.task.id) {
                    task.name = action.task.name;
                }
            });
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        default:
            return state;
    }
};

export default myReducer;
