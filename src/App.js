import React, {Component} from 'react';
import TaskForm from "./components/TaskForm/TaskForm";
import Control from "./components/Control/Control";
import TaskList from "./components/TaskList/TaskList";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            isDisplayForm: true,
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


    componentDidMount() {
        if (localStorage && localStorage.getItem('tasks')) {
            let tasks = JSON.parse(localStorage.getItem(('tasks')));
            this.setState({
                tasks: tasks
            });
        }
    }

    // onGenerateData = () => {
    //     let tasks = [
    //         {
    //             id: 1,
    //             name: 'Laravel',
    //             status: true,
    //         },
    //         {
    //             id: 2,
    //             name: 'Javascript',
    //             status: true,
    //         },
    //         {
    //             id: 3,
    //             name: 'Reactjs',
    //             status: true,
    //         }
    //     ];
    //
    //     this.setState({
    //         tasks: tasks
    //     });
    //     localStorage.setItem('tasks', JSON.stringify(tasks));
    // };

    displayForm = () => {
        this.setState({
            isDisplayForm: !this.state.isDisplayForm
        });
    };

    closeForm = () => {
        this.setState({
            isDisplayForm: !this.state.isDisplayForm
        });
    };

    onSubmit = (data) => {
        let tasks = this.state.tasks;
        tasks.push(data);
        this.setState({
            tasks: tasks,
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    updateStatus = (task) => {
        let {tasks} = this.state;
        if (tasks[task.id]) {
            tasks[task.id] = task
        }
        this.setState({
            tasks: tasks
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    delete = (task) => {
        let {tasks} = this.state;
        tasks = tasks.filter(item => item.id !== task.id);
        this.setState({
            tasks: tasks,
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
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
        let {tasks, isDisplayForm, filter, sort} = this.state;
        if (filter) {
            if(filter.name) {
                tasks = tasks.filter(task => {
                   return task.name.indexOf(filter.name) !== -1;
                });
            }
            if (filter.status) {
                tasks = tasks.filter(task => {
                    if (filter.status === 2) {
                        return task;
                    } else if(filter.status === 1) {
                        return task.status === true;
                    } else{
                        return task.status === false;
                    }
                })
            }
        }
        if (sort) {
            tasks.sort((a, b) => {
                if (sort.by === 'name') {
                    if (sort.value === 'asc') {
                        return 1
                    } else {
                        return -1
                    }
                }
            });
        }
        let taskForm = isDisplayForm ? <TaskForm onSubmit={this.onSubmit} closeForm={this.closeForm}/> : '';
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
                            {/*<button type="button" className="btn btn-warning ml-2" onClick={this.onGenerateData}>*/}
                            {/*    Generate data*/}
                            {/*</button>*/}
                            <Control sort={this.sort}/>
                            <TaskList tasks={tasks} updateStatus={this.updateStatus} delete={this.delete} update={this.update} filter={this.onFilter}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;