import React, { useState } from 'react'
import { Modal, ModalBody, ModalHeader,ModalFooter ,Button } from 'reactstrap';
const CreateTask = ({modal, toggle, save}) => {
  const [taskName,setTaskName] = useState("");
  const [desc,setDesc] = useState("");
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if(name === "taskName"){
      setTaskName(value);
    }
    else{
      setDesc(value);
    }
  }
  // creating a function as handleSaving is responsible for saving the task name and description to the taskList array
  const handleSaving = () => {
    let taskObj = {};
    taskObj["Name"] = taskName;
    taskObj["Description"] = desc;
    save(taskObj);
  }
  return (

    <div className='createTask'>
       <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create New Task</ModalHeader>
        <ModalBody>
          <form>
            <div className="form-group mb-3">
              <label>Task Name</label>
                <input type="text" className='form-control mt-1' value={taskName} onChange={handleChange} name="taskName" />
            </div>
            <div className="form-group mb-3">
              <label>Description</label>
               <textarea rows="5" className='form-control mt-1' value={desc} onChange={handleChange} name="description" ></textarea>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSaving}>create</Button>{' '}
          <Button color="secondary" onClick={toggle}>cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default CreateTask
