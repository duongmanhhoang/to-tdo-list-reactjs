import * as type from './../consts/ActionType';

let initialState = {
    by: 'name',
    value: 'asc',
};

let myReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.SORT:
            return action.sort;
        default:
            return state;
    }
};

export default myReducer;
