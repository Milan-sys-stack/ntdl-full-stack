import axios from "axios";

const api =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:8000/api/v1/task"
    : "/api/v1/task";

export const postTask = async (taskObj) => {
  try {
    const { data } = await axios.post(api, taskObj);
    return data;
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const fetchTasks = async () => {
  try {
    const { data } = await axios.get(api);
    return data;
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const switchTask = async (taskObj) => {
  try {
    const { data } = await axios.patch(api, taskObj);
    return data;
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const deleteTasks = async (ids) => {
  try {
    const { data } = await axios.delete(api, { data: ids });
    return data;
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message: error.message,
    };
  }
};
