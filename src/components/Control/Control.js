import React, {Component} from 'react';
import Sort from "./Sort/Sort";

class Control extends Component {
    sort = (by, value) => {
      this.props.sort(by, value);
    };
    render() {
        return (
            <div className="row mt-3">
                {/*<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">*/}
                {/*  <Search/>*/}
                {/*</div>*/}
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                   <Sort sort={this.sort} />
                </div>
            </div>
        );
    }
}

export default Control;