import { createSlice } from "@reduxjs/toolkit";

export const initialStateValue = 1;
export const initialStateValue1 = 1;
export const initialStateValue2 = [];



export const theStore = createSlice({
  name: "theStore",
  initialState: { value: initialStateValue, value1: initialStateValue1, value2: initialStateValue2 },
  reducers: {
    getData: (state, action) => {
      state.value = action.payload;
    },
    getData1: (state, action) => {
      state.value1 = action.payload;
    },
    getData2: (state, action) => {
      state.value2 = action.payload;
    },
  },
});

export const { getData, getData1, getData2 } = theStore.actions;

export default theStore.reducer;