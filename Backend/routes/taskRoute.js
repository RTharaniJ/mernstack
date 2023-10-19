const express = require("express");

const router = express.Router();

const {
  createTask,
  getTasks,
  getTask,
  updateTask,
  deleteTask
} = require("../controllers/TaskController");

router.post("/", createTask);
router.get("/", getTasks);
router.get("/:id", getTask);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);


module.exports = router;
