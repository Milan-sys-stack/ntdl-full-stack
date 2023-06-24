import { toast } from "react-toastify";
import {
  deleteTasks,
  fetchTasks,
  postTask,
  switchTask,
} from "../helper/axiosHelper";
import { setTaskList } from "./taskSlice";

export const getTaskList = () => async (dispatch) => {
  const { status, taskList } = await fetchTasks();

  if (status === "success") {
    // setList(taskList);
    dispatch(setTaskList(taskList));
  }
};

export const addTaskList = (taskObj) => async (dispatch) => {
  try {
    //send data to the api
    const respPromise = postTask(taskObj);

    toast.promise(respPromise, {
      pending: "please wait....",
    });
    const { status, message } = await respPromise;

    console.log(status)
    toast[status](message);

    if (status === "success") {
      //call the api to fetch all the tasks
      dispatch(getTaskList());
    }
  } catch (error) {
    toast.error(error.message);
  }
};

export const updateTask = (taskObj) => async (dispatch) => {
  const dataPending = switchTask(taskObj);

  toast.promise(dataPending, {
    pending: "Please wait ...",
  });

  const { status, message } = await dataPending;
  toast[status](message);

  if (status === "success") {
    dispatch(getTaskList());
  }
};

export const deleteTaskAction = (ids) => async (dispatch) => {
  const pendigResp = deleteTasks(ids);

  toast.promise(pendigResp, {
    pending: "Please wait...",
  });

  const { status, message } = await pendigResp;
  toast[status](message);

  if (status === "success") {
    dispatch(getTaskList());
  }
};
