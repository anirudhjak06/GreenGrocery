import { createSlice } from "@reduxjs/toolkit";

export const contactSlice = createSlice({
  name: "contact",
  initialState: {
    contacts: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getContactStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getContactSuccess: (state, action) => {
      state.isFetching = false;
      state.contacts = action.payload;
    },
    getContactFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getContactStart: getContactStart,
  getContactSuccess: getContactSuccess,
  getContactFailure: getContactFailure,
} = contactSlice.actions;

export default contactSlice.reducer;
