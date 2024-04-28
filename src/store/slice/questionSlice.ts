import { createSlice } from "@reduxjs/toolkit";
import { IQuestions } from "types";

const initialState: IQuestions = [
  {
    type: "choice",
    id: 1,
    text: "Your favorite movie genre?",
    options: [
      {
        id: 1,
        icon: "\uD83C\uDFAD",
        name: "Drama",
        questionId: 1,
      },
      {
        id: 2,
        icon: "\uD83E\uDD39",
        name: "Comedy",
        questionId: 1,
      },
      {
        id: 3,
        icon: "\uD83E\uDD77",
        name: "Action",
        questionId: 1,
      },
      {
        id: 4,
        icon: "\uD83E\uDDDF",
        name: "Thriller",
        questionId: 1,
      },
      {
        id: 5,
        icon: "\uD83D\uDC68\u200D\uD83D\uDD2C",
        name: "Science Fiction",
        questionId: 1,
      },
    ],
  },
  {
    type: "text",
    id: 2,
    text: "Enter movie title:",
  },
];

const questionSlice = createSlice({
  name: "question",
  initialState: initialState,
  reducers: {},
});

export default questionSlice.reducer;
