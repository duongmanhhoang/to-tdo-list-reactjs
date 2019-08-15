import * as type from './../consts/ActionType';

export const listAll = () => {
    return {
        type: type.LIST_ALL
    }
};

export const addTask = (task) => {
    return {
        type: type.ADD_TASK,
        task: task,
    }
};

export const toggleForm = () => {
    return {
        type: type.TOGGLE_FORM,
    }
};

export const closeForm = () => {
    return {
        type: type.CLOSE_FORM,
    }
};

export const updateStatus = (task) => {
    return {
        type: type.UPDATE_STATUS,
        task,
    }
};

export const deleteTask = (task) => {
    return {
        type: type.DELETE_TASK,
        task
    }
};

export const editTask = (task) => {
    return {
        type: type.EDIT_TASK,
        task,
    }
};

export const getTask = (task) => {
    return {
        type: type.GET_TASK,
        task,
    }
};

export const updateTask = (task) => {
    return {
        type: type.UPDATE_TASK,
        task
    }
};
