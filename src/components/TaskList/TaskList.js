import React, {Component} from 'react';
import EditTask from "../EditTask/EditTask";
import {connect} from "react-redux";
import * as actions from "./../../actions/index";

class TaskList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filterName: '',
            filterStatus: 2,
        }
    }

    updateStatus = (task) => {
        task.status = !task.status;
        this.props.updateStatus(task);
    };

    delete = (task) => {
        this.props.deleteTask(task);
    };

    editTask = (task) => {
        this.props.editTask(task);
    };

    onChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        if (name === 'filterStatus') {
            value = parseInt(value);
        }
        ;
        let filter = {
            filterName: name === 'filterName' ? value : this.state.filterName,
            filterStatus: name === 'filterStatus' ? value : this.state.filterStatus,
        };
        this.props.filterTable(filter);
        this.setState({
            [name]: value,
        })
    };

    render() {
        let {tasks, filter, sort} = this.props;
        if (filter) {
            if (filter.filterName) {
                tasks = tasks.filter(task => task.name.indexOf(filter.filterName) !== -1);
            }
            if (filter.filterStatus) {
                tasks = tasks.filter(task => {
                    if (filter.filterStatus === 2) {
                        return task;
                    } else if (filter.filterStatus === 1) {
                        return task.status === true;
                    } else {
                        return task.status === false;
                    }
                });
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
                return -1;
            });
        };
        let listTasks = tasks.map((task, index) => {
            return (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{task.name}</td>
                    <td className="text-center">
                        <span onClick={() => this.updateStatus(task)}
                              className={task.status ? 'alert alert-success' : 'alert alert-danger'}>{task.status ? 'Kích hoạt' : 'Ẩn'}</span>
                    </td>
                    <td className="text-center">
                        <button type="button" className="btn btn-warning" onClick={() => this.editTask(task)}
                                data-toggle="modal" data-target="#editModal">
                            <span className="fa fa-pencil"/>
                        </button>
                        &nbsp;
                        <button type="button" className="btn btn-danger" onClick={() => this.delete(task)}>
                            <span className="fa fa-trash"/>
                        </button>
                    </td>
                </tr>
            )
        });
        return (
            <div className="row mt-15">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <table className="table table-bordered table-hover">
                        <thead>
                        <tr>
                            <th className="text-center">STT</th>
                            <th className="text-center">Tên</th>
                            <th className="text-center">Trạng Thái</th>
                            <th className="text-center">Hành Động</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td/>
                            <td><input type="text" className="form-control" name="filterName"
                                       onChange={this.onChange}/></td>
                            <td><select className="form-control" name="filterStatus"
                                        onChange={this.onChange}>
                                <option value={2}>Tất Cả</option>
                                <option value={-1}>Ẩn</option>
                                <option value={1}>Kích Hoạt</option>
                            </select></td>
                            <td/>
                        </tr>
                        {listTasks}
                        </tbody>
                    </table>
                </div>
                <EditTask/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
        filter: state.filterTable,
        sort: state.sort,
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        updateStatus: (task) => {
            dispatch(actions.updateStatus(task));
        },
        deleteTask: (task) => {
            dispatch(actions.deleteTask(task));
        },
        editTask: (task) => {
            dispatch(actions.editTask(task));
        },
        filterTable: (filter) => {
            dispatch(actions.filterTable(filter));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
