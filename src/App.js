import React, {Component} from 'react';
import TaskForm from "./components/TaskForm/TaskForm";
import Control from "./components/Control/Control";
import TaskList from "./components/TaskList/TaskList";
import {connect} from 'react-redux';
import * as actions from './actions/index';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDisplayForm: false,
            filter: {
                name: '',
                status: 2,
            },
            sort: {
                by: 'name',
                value: 'asc',
            }
        }
    };


    displayForm = () => {
        this.props.toggleForm();
    };

    update = (task) => {
        let {tasks} = this.state;
        if (tasks[task.id]) {
            tasks[task.id] = task
        }
        this.setState({
            tasks: tasks
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
        alert('Thay đổi thành công');
    };

    onFilter = (filterName, filterStatus) => {
        let status = parseInt(filterStatus);
        this.setState({
            filter: {
                name: filterName,
                status: status
            }
        });
    };

    sort = (by, value) => {
        this.setState({
            sort: {
                by: by,
                value: value,
            }
        })
    };

    render() {
        // if (filter) {
        //     if(filter.name) {
        //         tasks = tasks.filter(task => {
        //            return task.name.indexOf(filter.name) !== -1;
        //         });
        //     }
        //     if (filter.status) {
        //         tasks = tasks.filter(task => {
        //             if (filter.status === 2) {
        //                 return task;
        //             } else if(filter.status === 1) {
        //                 return task.status === true;
        //             } else{
        //                 return task.status === false;
        //             }
        //         })
        //     }
        // }
        // if (sort) {
        //     tasks.sort((a, b) => {
        //         if (sort.by === 'name') {
        //             if (sort.value === 'asc') {
        //                 return 1
        //             } else {
        //                 return -1
        //             }
        //         }
        //
        //         return -1;
        //     });
        // }
        let {isDisplayForm} = this.props;
        let taskForm = isDisplayForm ? <TaskForm /> : '';
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 mt-3">
                            <h1 className="text-center">Quản lý công việc</h1>
                            <hr className="mt-3 mb-3"/>
                        </div>
                        {taskForm}
                        <div className={isDisplayForm ? 'col-8' : 'col-12'}>
                            <button type="button" className="btn btn-primary" onClick={this.displayForm}>
                                {isDisplayForm ? 'Đóng Form' : 'Thêm công việc'}
                            </button>
                            <Control sort={this.sort}/>
                            <TaskList update={this.update} filter={this.onFilter}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isDisplayForm: state.formControl,
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        toggleForm: () => {
            dispatch(actions.toggleForm())
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);