import React, {Component} from 'react';

class Search extends Component {
    render() {
        return (
            <div className="input-group mb-3">
                <input type="text" name="keyword" className="form-control" placeholder="Nhập từ khóa..."/>
                <div className="input-group-append">
                    <button className="btn btn-primary" type="button">
                        <span className="fa fa-search mr-"/>
                    </button>
                </div>
            </div>
        );
    }
}

export default Search;