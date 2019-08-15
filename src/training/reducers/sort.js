import * as type from "./../const/ActionType";

let initialState = {
    by: 'name',
    value: 'asc',
};

let myReducer = (state = initialState, action) => {
    if (action.type === type.SORT) {
        let {by, value} = action.sort;

        return {by, value}
    }
    return state;
};

export default myReducer;
