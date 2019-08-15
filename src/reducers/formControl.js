import * as type from './../consts/ActionType';

let initialState = false;

let myReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.TOGGLE_FORM:
            return !state;
        case type.CLOSE_FORM:
            return false;
        default:
            return state;
    }
};

export default myReducer;
