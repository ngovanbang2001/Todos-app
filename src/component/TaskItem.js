import React from "react";
import { connect } from "react-redux";
import * as action from "./../action/index.js";
class TaskItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  findIndex(id) {
    const { tasks } = this.props;
    var result = -1;
    tasks.forEach((task, index) => {
      if (task.id === id) {
        result = index;
      }
    });
    return result;
  }
  handleDelete() {
    const key = this.findIndex(this.props.task.id);
    this.props.onHandleDelete(key);
  }
  handleEdit() {
    this.props.onOpenForm();
    this.props.onHandleEdit(this.props.task);
  }
  handleChange() {
    this.props.onChangeStatus(this.props.task.id);
  }
  render() {
    return (
      <tr>
        <td>{this.props.index + 1}</td>
        <td>{this.props.task.txtName}</td>
        <td className="text-center">
          <span
            className={
              this.props.task.txtStatus
                ? "label label-danger"
                : "label label-info"
            }
            onClick={this.handleChange}
          >
            {this.props.task.txtStatus ? "Kích hoạt" : "Ẩn"}
          </span>
        </td>
        <td className="text-center">
          <button
            type="button"
            className="btn btn-warning"
            onClick={this.handleEdit}
          >
            <span className="fa fa-pencil mr-5"></span>Sửa
          </button>
          &nbsp;
          <button
            type="button"
            className="btn btn-danger"
            onClick={this.handleDelete}
          >
            <span className="fa fa-trash mr-5"></span>Xóa
          </button>
        </td>
      </tr>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    isDisplayForm: state.isDisplayForm,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onHandleDelete: (key) => {
      dispatch(action.onHandleDelete(key));
    },
    onHandleEdit: (task) => {
      dispatch(action.onHandleEdit(task));
    },
    onOpenForm: () => {
      dispatch(action.onOpenForm());
    },
    onChangeStatus: (key) => {
      dispatch(action.onChangeStatus(key));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);
