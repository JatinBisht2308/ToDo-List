import React, { useState } from "react";
import "./ToDoList.css";
import CreateTask from "../Modals/createTask";
const ToDoList = () => {
  const [modal, setModal] = useState(false);
  // this function toggle will set the setModal to the opposite modal state
  const toggle = () => setModal(!modal);
  return (
    <div className="ToDoList">
      <div className="div-1 text-center">
        <h3>Todo List</h3>
        <button className="btn btn-primary  mt-3" onClick={()=> setModal(true)} >Create Task</button>
      </div>
      <div className="div-2 task-container">{/* here we have the cards */}</div>
      <CreateTask modal={modal} toggle={toggle} />
    </div>
  );
};

export default ToDoList;
