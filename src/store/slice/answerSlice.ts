import { createSlice } from "@reduxjs/toolkit";
import { TAnswer } from "types";

const initialState: Record<string, TAnswer> = {};

const answerSlice = createSlice({
  name: "answer",
  initialState,
  reducers: {
    addAnswer: (state, { payload }) => {
      return { ...state, [payload.questionId]: payload };
    },
    resetAnswer: () => initialState,
  },
});

export const { addAnswer, resetAnswer } = answerSlice.actions;

export default answerSlice.reducer;
