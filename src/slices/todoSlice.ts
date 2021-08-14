import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
  title: string;
  completed: boolean;
}

export type TodoState = Todo[];

const todoSlice = createSlice({
  name: "todo",
  initialState: [] as TodoState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.push(action.payload);
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      return state.filter((el) => el.title !== action.payload);
    },
  },
});

export const todoReducer = todoSlice.reducer;

export const todoAction = todoSlice.actions;
