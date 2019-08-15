import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from './../../actions/index';

class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            status: true,
        }
    }

    closeForm = () => {
        this.props.closeForm();
    };

    onChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        if (name === 'status' && value === '1') {
            value = true;
        } else if (name === 'status' && value === '2') {
            value = false;
        }
        this.setState({
            id: new Date().getUTCMilliseconds(),
            [name]: value,
        });
    };

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onAdd(this.state);
        this.clearForm();
        this.closeForm();
    };

    clearForm = () => {
        this.setState({
            name: '',
            status: true,
        });
    };


    render() {
        return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="card bg-light mb-3">
                    <div className="card-header">Thêm công việc
                        <button className="pull-right" onClick={this.closeForm}>
                            <span className="fa fa-times-circle"></span>
                        </button>
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group"><label>Tên :</label>
                                <input type="text" className="form-control" name="name" onChange={this.onChange}/>
                            </div>
                            <label>Trạng Thái :</label><select className="form-control" name="status"
                                                               onChange={this.onChange}>
                            <option value="1">Kích Hoạt</option>
                            <option value="2">Ẩn</option>
                        </select><br/>
                            <div className="text-center">
                                <button type="submit" className="btn btn-primary">
                                    Lưu Lại
                                </button>
                                &nbsp;
                                <button type="reset" className="btn btn-danger">
                                    Hủy Bỏ
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {}
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAdd: (task) => {
            dispatch(actions.addTask(task));
        },
        closeForm: () => {
            dispatch(actions.closeForm());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);