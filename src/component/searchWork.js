import React from "react";
import { connect } from "react-redux";
import * as action from "./../action/index.js";
class SearchWork extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onInput = this.onInput.bind(this);
  }
  onChange(e) {
    var value = e.target.value;
    this.setState({
      name: value,
    });
  }
  onInput() {
    this.props.onSearch(this.state.name);
  }
  render() {
    return (
      <div className="input-group mb-5">
        <input
          type="text"
          className="form-control"
          placeholder="Nhập từ khóa..."
          onChange={this.onChange}
        />
        <span className="input-group-btn">
          <button
            className="btn btn-primary"
            type="button"
            onClick={this.onInput}
          >
            <span className="fa fa-search mr-5"></span>Tìm
          </button>
        </span>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onSearch: (name) => {
      dispatch(action.onSearch(name));
    },
  };
};
export default connect(null, mapDispatchToProps)(SearchWork);
