import {combineReducers} from "redux";
import tasks from './tasks';
import formControl from './formControl';
import task from './task';

const myReducer = combineReducers({
    tasks,
    formControl,
    task
});

export default myReducer;
