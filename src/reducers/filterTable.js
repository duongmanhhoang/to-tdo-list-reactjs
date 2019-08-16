import * as type from './../consts/ActionType';

let initialState = {
    filterName: '',
    filterStatus: 2,
};

let myReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.FILTER_TABLE:
            return action.filter;
        default:
            return state;
    }
};

export default myReducer;
