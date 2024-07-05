import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showSideBar: false,

};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setshowSideBar: (state) => {
      state.showSideBar = state.showSideBar === false ? true : false;
    },
  },
});

export const { setshowSideBar } = globalSlice.actions;

export default globalSlice.reducer;