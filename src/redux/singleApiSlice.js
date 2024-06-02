import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";

const URL = "https://fakestoreapi.com/products";

export const singleData = createAsyncThunk("product", async () => {
  const response = await fetch(URL);
  const data = await response.json();
  try {
    return data;
  } catch (error) {
    console.log(error);
  }
});

const pending = createAction(singleData.pending);
const fullfilled = createAction(singleData.fulfilled);
const rejected = createAction(singleData.rejected);

const initialState = {
  loading: false,
  singleProduct: {},
  error: null,
};

export const singleApiSlice = createSlice({
  name: "single",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(pending, (state) => {
        state.loading = true;
      })
      .addCase(fullfilled, (state, action) => {
        state.loading = false;
        state.singleProduct = action.payload;
      })
      .addCase(rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {} = singleApiSlice.actions;

export default singleApiSlice.reducer;
