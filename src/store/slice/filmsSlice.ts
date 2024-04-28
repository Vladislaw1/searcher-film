import { AsyncThunk, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TFilm } from "types";
import { AsyncThunkConfig } from "@reduxjs/toolkit/dist/createAsyncThunk";

enum StatusResponse {
  SUCCESS = "True",
  FALSE = "False",
}

interface SliceState {
  loading: boolean;
  films: Array<TFilm>;
  error: string;
  titleFilm: string;
}

// const API_KEY = '90c9bf5e'

interface Response {
  status: StatusResponse;
  data: Array<TFilm> | [];
  error: string;
}

export const fetchFilms: AsyncThunk<Response, string, AsyncThunkConfig> =
  createAsyncThunk("films/fetchFilms", async (titleFilm: string) => {
    const { Search, Response, Error } = await fetch(
      `https://www.omdbapi.com/?s=${titleFilm}&apikey=${process.env.REACT_APP_API_KEY}`,
    ).then((res) => res.json());

    return {
      status: Response,
      data: Search,
      error: Error,
    };
  });

const initialState: SliceState = {
  loading: false,
  films: [],
  error: "",
  titleFilm: "",
};

const filmsSlice = createSlice({
  name: "films",
  initialState,
  reducers: {
    searchFilm: (state, { payload }) => {
      return { ...state, titleFilm: payload };
    },
    resetFilms: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFilms.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchFilms.fulfilled, (state, action) => {
      const { payload } = action;
      switch (payload.status) {
        case StatusResponse.FALSE:
          return {
            ...state,
            loading: false,
            films: payload.data,
            error: payload.error,
          };
        case StatusResponse.SUCCESS:
          return { ...state, loading: false, films: payload.data };
      }
    });
  },
});

export const { searchFilm, resetFilms } = filmsSlice.actions;

export default filmsSlice.reducer;
