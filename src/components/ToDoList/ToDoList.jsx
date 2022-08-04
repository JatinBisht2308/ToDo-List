import React, { useState } from "react";
import "./ToDoList.css";
import CreateTask from "../Modals/CreateTask";
import { Modal } from "reactstrap";
const ToDoList = () => {
  const [modal, setModal] = useState(false);
  // this function toggle will set the setModal to the opposite modal state
  const toggle = () => setModal(!modal);
  // creating an array which will store the task names a user has created from the create task button in the app
  const [taskList, setTaskList] = useState([]);

  // this function will add the task name to the taskList array
  const saveTask = (taskObj) => {
    let tempList = taskList;
    tempList.push(taskObj);
    setTaskList(tempList);
    // after this task list will become object array with two keys name and description
    setModal(false);
  };
  return (
    <div className="ToDoList">
      <div className="div-1 text-center">
        <h3>Todo List</h3>
        <button
          className="btn btn-primary  mt-3"
          onClick={() => setModal(true)}
        >
          Create Task
        </button>
      </div>
      <div className="div-2 task-container">
        {/* here we have the cards */}
        {taskList.map((obj) => (
          <li>{obj.Name}</li>
        ))}
      </div>
      <CreateTask modal={modal} toggle={toggle} save={saveTask} />
    </div>
  );
};

export default ToDoList;
