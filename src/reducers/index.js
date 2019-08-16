import {combineReducers} from "redux";
import tasks from './tasks';
import formControl from './formControl';
import task from './task';
import filterTable from './filterTable';
import sort from './sort';

const myReducer = combineReducers({
    tasks,
    formControl,
    task,
    filterTable,
    sort,
});

export default myReducer;
