import express from "express";
import {
  createTask,
  deleteTaskById,
  readTasks,
  switchTask,
  deleteManyTasks,
} from "../model/TaskModel.js";
const router = express.Router();

router.get("/", async (req, res) => {
  //get data from the db
  const taskList = await readTasks();

  res.json({
    status: "success",
    message: "From Get method",
    taskList,
  });
});

router.post("/", async (req, res) => {
  try {
    const result = await createTask(req.body);

    result?._id
      ? res.json({
          status: "success",
          message: "New task has been added successfully",
        })
      : res.json({
          status: "error",
          message: "unable to add the data",
        });
  } catch (error) {
    res.json({
      status: "error",
      message: error.messasge,
    });
    console.log(error);
  }
});

router.patch("/", async (req, res) => {
  try {
    const { _id, type } = req.body;
    // update data in db
    const result = await switchTask(_id, type);

    result?._id
      ? res.json({
          status: "success",
          message: "The task has been switeched successfully",
        })
      : res.json({
          status: "error",
          message: "The task did not switeched ",
        });
  } catch (error) {
    console.log(error);

    res.json({
      status: "error",
      message: "The task did not switeched ",
    });
  }
});

router.delete("/", async (req, res) => {
  try {
    const result = await deleteManyTasks(req.body);

    result?.deletedCount > 0
      ? res.json({
          status: "success",
          message: "The tasks have been deleted successfully",
        })
      : res.json({
          status: "error",
          message: "Unable to delete the task ",
        });
  } catch (error) {
    console.log(error);

    res.json({
      status: "error",
      message: "Error deleting the task",
    });
  }
});

export default router;
