import * as type from './../consts/ActionType';

let initialState = {};

let myReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.EDIT_TASK:
            return action.task;
        default:
            return state;
    }
};

export default myReducer;
