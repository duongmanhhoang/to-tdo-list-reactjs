import React, {Component} from 'react';
import EditTask from "../EditTask/EditTask";

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: {
                name: '',
                status: true,
            },
            filterName: '',
            filterStatus: 2,
        }
    }
    updateStatus = (task) => {
        task.status = !task.status;
        this.props.updateStatus(task);
    };

    delete = (task) => {
        this.props.delete(task)
    };

    onUpdate = (task) => {
        this.setState({
            task: task,
        });

    };

    onReceiveUpdate = (name) => {
        let task = this.state.task;
        task.name = name;
        this.setState({
            task: task
        });
        this.props.update(this.state.task);
    };

    onChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        this.props.filter(
            name === 'filterName' ? value : this.state.filterName,
            name === 'filterStatus' ? value : this.state.filterStatus,
        )
        this.setState({
            [name]: value
        });
    };

    render() {
        let {tasks} = this.props;
        let {filterName, filterStatus} = this.state;
        let listTasks = tasks.map((task, index) => {
            return (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{task.name}</td>
                    <td className="text-center">
                        <span onClick={() => this.updateStatus(task)} className={ task.status ? 'alert alert-success' : 'alert alert-danger'}>{task.status ? 'Kích hoạt' : 'Ẩn'}</span>
                    </td>
                    <td className="text-center">
                        <button type="button" className="btn btn-warning" onClick={() => this.onUpdate(task)} data-toggle="modal" data-target="#editModal">
                            <span className="fa fa-pencil"/>
                        </button>
                        &nbsp;
                        <button type="button" className="btn btn-danger" onClick={() => this.delete(task)} >
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
                            <td><input type="text" className="form-control" name="filterName" defaultValue={filterName} onChange={this.onChange}/></td>
                            <td><select className="form-control" name="filterStatus" defaultValue={filterStatus} onChange={this.onChange}>
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
              <EditTask task={this.state.task} onReceiveUpdate={this.onReceiveUpdate}/>
            </div>
        );
    }
}

export default TaskList;