import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from './../../../actions/index';

class Sort extends Component {
    onChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        let sort = {
            by: name,
            value: value
        };
        this.props.sort(sort);
    };
    render() {
        return (
          <div>
              <form>
                  <div className="form-group">
                        <select className="form-control" name="name" onChange={this.onChange}>
                            <option value="asc">Tên: A - Z</option>
                            <option value="desc">Tên: Z - A</option>
                        </select>
                  </div>
              </form>
          </div>
        );
    }
}

const mapStateToProps = state => {
    return {}
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        sort: sort => dispatch(actions.sort(sort)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Sort);