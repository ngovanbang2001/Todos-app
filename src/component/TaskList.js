import React from "react";
import TaskItem from "./TaskItem.js";
import { connect } from "react-redux";
import * as action from "./../action/index.js";
class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: {
        filterName: "",
        filterStatus: -1,
      },
    };
    this.onHandleChange = this.onHandleChange.bind(this);
  }
  onHandleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.props.onFilter(
      name === "filterName" ? value : this.state.filterName,
      name === "filterStatus" ? value : this.state.filterStatus
    );
    this.setState({
      [name]: value,
    });
  }

  render() {
    var { tasks, search, sort, filter } = this.props;
    if (search) {
      tasks = tasks.filter((task) => {
        return task.txtName.toLowerCase().indexOf(search.toLowerCase()) !== -1;
      });
    }
    if (sort.name === "name") {
      tasks.sort((a, b) => {
        if (a.txtName > b.txtName) return sort.value;
        else if (a.txtName < b.txtName) return -sort.value;
        else return 0;
      });
    } else {
      tasks.sort((a, b) => {
        if (a.txtStatus > b.txtStatus) return -sort.value;
        else if (a.txtStatus < b.txtStatus) return sort.value;
        else return 0;
      });
    }
    if (filter) {
      if (filter.name) {
        tasks = tasks.filter((task) => {
          return (
            task.txtName.toLowerCase().indexOf(filter.name.toLowerCase()) !== -1
          );
        });
      }
      if (filter.status || filter.status === 0) {
        tasks = tasks.filter((task) => {
          if (filter.status === -1) {
            return task;
          } else {
            return task.txtStatus === (filter.status === 1 ? true : false);
          }
        });
      }
    }
    return (
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th className="text-center">STT</th>
            <th className="text-center">Tên</th>
            <th className="text-center">Trạng Thái</th>
            <th className="text-center">Hành Động</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>
              <input
                type="text"
                className="form-control"
                name="filterName"
                value={this.state.filterName}
                onChange={this.onHandleChange}
              />
            </td>
            <td>
              <select
                className="form-control"
                name="filterStatus"
                value={this.state.filterStatus}
                onChange={this.onHandleChange}
              >
                <option value="-1">Tất Cả</option>
                <option value="0">Ẩn</option>
                <option value="1">Kích Hoạt</option>
              </select>
            </td>
            <td></td>
          </tr>
          {tasks.map((task, index) => (
            <TaskItem key={index} index={index} task={task} />
          ))}
        </tbody>
      </table>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    search: state.search,
    sort: state.sort,
    filter: state.filter,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    showTaskList: () => {
      dispatch(action.listAll());
    },
    onFilter: (filterName, filterStatus) => {
      dispatch(action.onFilter(filterName, filterStatus));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
