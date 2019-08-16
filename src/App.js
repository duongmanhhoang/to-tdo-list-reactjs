import React, {Component} from 'react';
import TaskForm from "./components/TaskForm/TaskForm";
import Control from "./components/Control/Control";
import TaskList from "./components/TaskList/TaskList";
import {connect} from 'react-redux';
import * as actions from './actions/index';

class App extends Component {

    displayForm = () => {
        this.props.toggleForm();
    };

    render() {
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
                            <Control />
                            <TaskList />
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