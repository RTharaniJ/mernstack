import React, { useState,useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import MyVerticallyCenteredModal from "./updateTask";
import { deleteTaskFromServer, getTasksFromServer, removeTaskFromList, setSelectedTask } from "../slice/taskSlice";

import { useSelector, useDispatch } from "react-redux";

const TasksList = () => {
  const { tasksList } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const updateTask = (task) => {
    console.log("update task");
    setModalShow(true);
    dispatch(setSelectedTask(task));
  };

  useEffect(() =>{
dispatch(getTasksFromServer())
  },[dispatch])


  const deleteTask = (task) => {
    console.log("delete task");
    dispatch(deleteTaskFromServer(task))
    .unwrap()
    .then(() =>{
      dispatch(removeTaskFromList(task));
    })
    
  };
  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <Table striped bordered hover variant="light">
        <thead>
          <tr className="text-center">
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasksList &&
            tasksList.map((task, index) => {
              return (
                <tr className="text-center" key={task._id}>
                  <td>{index + 1}</td>
                  <td>{task.title}</td>
                  <td>{task.description}</td>
                  <td>
                    <Button
                      variant="primary"
                      className="mx-3"
                      onClick={() => updateTask(task)}
                    >
                      <i className="bi bi-pencil-square"></i>
                    </Button>
                    <Button variant="primary" onClick={() => deleteTask(task)}>
                      <i className="bi bi-trash"></i>
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default TasksList;
