import * as type from '../const/ActionType'

export const toggleStatus = () => {
    return {
        type: type.TOGGLE_STATUS
    }
};

export const sort = (sort) => {
    return {
        type: type.SORT,
        sort: sort,
    };
};