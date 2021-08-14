import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  count: number;
}

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 } as CounterState,
  reducers: {
    setCount: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
  },
});

export const counterReducer = counterSlice.reducer;

export const counterAction = counterSlice.actions;
