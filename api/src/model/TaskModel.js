// model does the queries

import TaskSchema from "./TaskSchema.js";

// Create data in db
export const createTask = (taskObj) => {
  return TaskSchema(taskObj).save();
};

export const readTasks = () => {
  return TaskSchema.find();
};

//_id as an string
export const switchTask = (_id, type) => {
  return TaskSchema.findByIdAndUpdate(_id, { type });
};

// delete one task
export const deleteTaskById = (_id) => {
  return TaskSchema.findByIdAndDelete(_id);
};

// delete many task
//@ids shuld be an array
export const deleteManyTasks = (ids) => {
  return TaskSchema.deleteMany({
    _id: {
      $in: ids,
    },
  });
};
