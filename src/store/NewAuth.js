import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  error: null,
  loading: false,
};

export const NewAuth = createSlice({
  name: "NewAuth",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchStart, fetchSuccess, fetchFailure } = NewAuth.actions;

export default NewAuth.reducer;
