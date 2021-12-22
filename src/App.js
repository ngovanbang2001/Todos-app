import React from "react";

import AddWork from "./component/addWork.js";
import TaskList from "./component/TaskList";
import Sort from "./component/sort.js";
import { connect } from "react-redux";
import * as action from "./action/index.js";
import SearchWork from "./component/searchWork.js";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleAddWork = this.handleAddWork.bind(this);

    this.findIndex = this.findIndex.bind(this);
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

  handleAddWork() {
    this.props.onToggleForm();
    this.props.onClearForm();
  }

  onHandleClose() {
    this.props.onCloseForm();
  }
  render() {
    var { isDisplayForm } = this.props;
    const checkTaskForm = isDisplayForm ? (
      <AddWork onHandleClose={this.onHandleClose} />
    ) : (
      ""
    );
    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr />
        </div>
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            {checkTaskForm}
          </div>
          <div
            className={
              isDisplayForm
                ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
                : "col-xs-12 col-sm-12 col-md-12 col-lg-12"
            }
          >
            <button
              type="button"
              className="btn btn-primary mb-5"
              onClick={this.handleAddWork}
            >
              <span className="fa fa-plus mr-5"></span>Thêm Công Việc
            </button>
            <div className="row mt-15">
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <SearchWork />
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <Sort />
              </div>
            </div>
            <div className="row mt-15">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <TaskList />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    isDisplayForm: state.isDisplayForm,
    taskEditing: state.taskEditing,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onToggleForm: () => {
      dispatch(action.onToggleForm());
    },
    onCloseForm: () => {
      dispatch(action.onCloseForm());
    },
    onClearForm: () => {
      dispatch(action.onClearForm());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
