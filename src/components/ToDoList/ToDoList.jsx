import React, { useState, useEffect } from "react";
import "./ToDoList.css";
import CreateTask from "../Modals/CreateTask";
import Card from "../Card/Card";
import { Modal } from "reactstrap";
const ToDoList = () => {
  const [modal, setModal] = useState(false);
  // this function toggle will set the setModal to the opposite modal state
  const toggle = () => setModal(!modal);
  // creating an array which will store the task names a user has created from the create task button in the app
  const [taskList, setTaskList] = useState([]);

  // using use effect to not delete the task
  useEffect(() => {
    // this array arr contains all the list item of our task list that is stored in the local storage
    let arr = localStorage.getItem("taskList");

    // we will check if the objArr is not empty and if it is not empty we will set the taskList to the objArr
    if (arr) {
      // arr is a json string we have to convert it into array
      let objArr = JSON.parse(arr);
      setTaskList(objArr);
    }
  }, []);
  // this function will add the task name to the taskList array
  const saveTask = (taskObj) => {
    let tempList = taskList;
    tempList.push(taskObj);
    // the below code will save a particular card in the local storage so that after refreshing it wont vanish out
    localStorage.setItem("taskList", JSON.stringify(tempList));
    // after this task list will become object array with two keys name and description
    setModal(false);
    setTaskList(taskList);
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
        {taskList.map((obj, index) => (
          <Card taskObj = {obj} index={index} />
        ))}
      </div>
      <CreateTask modal={modal} toggle={toggle} save={saveTask} />
    </div>
  );
};

export default ToDoList;
