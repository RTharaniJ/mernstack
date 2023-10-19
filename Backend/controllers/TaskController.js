const taskModel = require("../models/TaskModel");
const mongoose = require("mongoose");

//to create task
const createTask = async (req, res) => {
    const { title, description } = req.body;

    try {
        const task = await taskModel.create({ title, description });
        res.status(200).json(task);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
};

// To get all tasks
const getTasks = async (req, res) => {
    try {
        const tasks = await taskModel.find({})

        res.status(200).json(tasks);
    } catch(e) {
        res.status(400).json({ error: e.message });
    }
}

// to get specific task based on id 

const getTask = async (req, res) => {

    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: "Task not Found" })
    }

    try {
        const singleTask = await taskModel.findById(id)

        res.status(200).json(singleTask);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
}


// To update task -PATCH 

const updateTask = async (req, res) => {

    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Task not Found" })
    }

    try {
        const task = await taskModel.findByIdAndUpdate(
            {
                _id: id,
            },
            {
              ...req.body,
            }
        );
        
        res.status(200).json(task);
    }
    catch (e){
        res.status(400).json({ error: e.message });
    }
}

// To delete task -Delete 
const deleteTask = async (req, res) => {

    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Task not Found how can i delete it?!" })
    }

    try {
        const task = await taskModel.findByIdAndDelete(id);
        
        res.status(200).json(task);
    }
    catch (e){
        res.status(400).json({ error: e.message });
    }
}





module.exports = { createTask, getTasks, getTask ,updateTask,deleteTask};
