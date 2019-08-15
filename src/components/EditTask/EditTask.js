import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from './../../actions/index';

class EditTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
        };
    };

    onChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        this.setState({
            id: this.props.task.id,
            [name]: value,
        })
    };

    submit = (event) => {
        event.preventDefault();
        if (this.state.name !== '') {
            this.props.updateTask(this.state);
        } else {
            alert('Bạn chưa thay đổi gì cả');
        }
    };

    closeForm = () => {
        this.myFormRef.reset();
    };
    render() {
        return (
            <div className="modal fade" id="editModal" tabIndex={-1} role="dialog" aria-hidden="true" data-keyboard="false" data-backdrop="static">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Cập nhập task</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.closeForm}>
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form ref={(el) => this.myFormRef = el} onSubmit={this.submit}>
                                <div className="form-group">
                                    <label>Tên</label>
                                    <input type="text" name="name" ref="name" className="form-control"
                                           defaultValue={this.props.task.name} onChange={this.onChange}/>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary">Save changes</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        task: state.task
    }
};

const mapDispatchToProps = (dispatch, props) => {
      return {
          updateTask: (task) => {
              dispatch(actions.updateTask(task))
          }
      }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditTask);