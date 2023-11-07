import { createSlice } from "@reduxjs/toolkit";

export const initialStateValue = [];

export const userStore = createSlice({
  name: "userStore",
  initialState: { value: initialStateValue },
  reducers: {
    getData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { getData } = userStore.actions;

export default userStore.reducer;