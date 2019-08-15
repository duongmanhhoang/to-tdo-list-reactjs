import React, {Component} from 'react';

class Sort extends Component {
    onChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        this.props.sort(name, value);
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

export default Sort;