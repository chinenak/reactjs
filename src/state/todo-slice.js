import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: { todoList: [], filter: "SHOW_ALL" },
  reducers: {
    addTodo(state, action) {
      state.todoList.push({
        id: Math.random(100),
        title: action.payload,
        isActive: true,
      });
    },

    updateTodoList(state, action) {
      const updateIndex = state.todoList.findIndex(
        (todo) => todo.id === action.payload
      );
      state.todoList[updateIndex].isActive =
        !state.todoList[updateIndex].isActive;
    },

    allDisplay(state) {
      state.filter = "SHOW_ALL";
    },

    activeDisplay(state) {
      state.filter = "SHOW_ACTIVE";
    },
    completedDisplay(state) {
      state.filter = "SHOW_COMPLETED";
    },
  },
});

export const todoAction = todoSlice.actions;
export default todoSlice.reducer;
