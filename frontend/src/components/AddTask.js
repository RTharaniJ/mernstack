import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import {  addTaskToServer } from "../slice/taskSlice";

const AddTask = () => {

  const dispatch =useDispatch()
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addTask =(e) =>{
    e.preventDefault()
    console.log({title, description});
    dispatch(addTaskToServer({title, description}))
    setTitle("")
    setDescription("")
  }

  return (
    <div className="my-5">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Task Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Task description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Task description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        <div className="text-end">
          <Button variant="primary  my-4" type="submit" onClick={(e) => addTask(e)}>
            Add Task
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddTask;
