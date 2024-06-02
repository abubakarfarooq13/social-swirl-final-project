import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";

const URL = "https://fakestoreapi.com/products";

export const userData = createAsyncThunk("user", async () => {
  const response = await fetch(URL);
  const data = await response.json();
  try {
    return data;
  } catch (error) {
    console.log(error);
  }
});

const pending = createAction(userData.pending);
const fullfilled = createAction(userData.fulfilled);
const rejected = createAction(userData.rejected);

const initialState = {
  loading: false,
  data: [],
  error: null,
};

export const apiSlice = createSlice({
  name: "api",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(pending, (state) => {
        state.loading = true;
      })
      .addCase(fullfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {} = apiSlice.actions;

export default apiSlice.reducer;
