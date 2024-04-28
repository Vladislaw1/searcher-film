import {configureStore} from "@reduxjs/toolkit";
import {answerReducer, questionReducer,filmsReducer} from "./slice";

export const store = configureStore({
    reducer: {
        questions: questionReducer,
        answers: answerReducer,
        films: filmsReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch