import React from "react";
import { connect } from "react-redux";
import * as action from "./../action/index.js";
class AddWork extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddWork = this.handleAddWork.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.onClear = this.onClear.bind(this);
    this.state = {
      id: "",
      txtName: "",
      txtStatus: true,
    };
  }

  componentDidMount() {
    const { taskEditing } = this.props;
    if (taskEditing && taskEditing.id !== null) {
      this.setState({
        id: taskEditing.id,
        txtName: taskEditing.txtName,
        txtStatus: taskEditing.txtStatus,
      });
    } else {
      this.setState({
        id: "",
        txtName: "",
        txtStatus: true,
      });
    }
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.taskEditing) {
      this.setState({
        id: nextProps.taskEditing.id,
        txtName: nextProps.taskEditing.txtName,
        txtStatus: nextProps.taskEditing.txtStatus,
      });
    }
  }
  handleChange(e) {
    var name = e.target.name;
    var value = e.target.value;
    if (name === "txtStatus") value = value === "true" ? true : false;
    this.setState({
      [name]: value,
    });
  }
  handleAddWork(e) {
    e.preventDefault();
    this.props.onAddWork(this.state);
    this.props.onCloseForm();
  }
  onClear() {
    this.setState({
      id: "",
      txtName: "",
      txtStatus: true,
    });
  }
  handleClose() {
    this.props.onCloseForm();
  }
  render() {
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">
            {this.state.id ? "Cập Nhập Công Việc" : "Thêm Công Việc"}
            <span
              className="fal fa-times text-right"
              onClick={this.handleClose}
            ></span>
          </h3>
        </div>
        <div className="panel-body">
          <form onSubmit={this.handleAddWork}>
            <div className="form-group">
              <label>Tên :</label>
              <input
                type="text"
                className="form-control"
                onChange={this.handleChange}
                value={this.state.txtName}
                name="txtName"
              />
            </div>
            <label>Trạng Thái :</label>
            <select
              className="form-control"
              required="required"
              value={this.state.txtStatus}
              onChange={this.handleChange}
              name="txtStatus"
            >
              <option value={true}>Kích Hoạt</option>
              <option value={false}>Ẩn</option>
            </select>
            <br />
            <div className="text-center">
              <button type="submit" value="submit" className="btn btn-warning">
                Thêm
              </button>
              &nbsp;
              <button
                type="reset"
                className="btn btn-danger"
                onClick={this.onClear}
              >
                Hủy Bỏ
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isDisplayForm: state.isDisplayForm,
    taskEditing: state.taskEditing,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddWork: (task) => {
      dispatch(action.addTask(task));
    },
    onCloseForm: () => {
      dispatch(action.onCloseForm());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddWork);
