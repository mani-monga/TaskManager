import React from "react";
import { ImCross } from "react-icons/im";
import "./TaskDetails.css";

const TaskDetails = (props) => {
  const { columnIndex, position } = props.TaskShow;
  const tempData = [...props["data"]];
  const task = tempData[columnIndex - 1].taskList[position - 1];
  return (
    <>
      <p className="CloseSideBar" onClick={() => props.setTaskShow(false)}>
        <ImCross />
        <span>Close</span>
      </p>
      <div className="TaskDetailsContainer">
        <label className="TitleWrapper">
          <p className="Placeholder">Name</p>
          <p className="Details">{task.title}</p>
        </label>
        <label className="DescWrapper">
          <p className="Placeholder">Description</p>
          <p className="Details">{task.description}</p>
        </label>
        <label className="TagsWrapper">
          <p className="Placeholder">Tags Used</p>
          <p className="Details">
              {task.tags.map((tag, i) => {
                return (
                  <span className="Tags" key={i}>
                    {tag}
                  </span>
                );
              })}
          </p>
        </label>
      </div>
      <div className="TaskDetailsFooter">
         <button>Delete Task</button>
      </div>
    </>
  );
};

export default TaskDetails;
