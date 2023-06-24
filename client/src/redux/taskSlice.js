import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  taskList: [],
};
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    setTaskList: (state, action) => {
      state.taskList = action.payload;
    },
  },
});

const { reducer, actions } = taskSlice;

export const { setTaskList } = actions;

export default reducer;
