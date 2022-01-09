import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
  name: "order",
  initialState: {
    products: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    OrderStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    OrderSuccess: (state, action) => {
      state.isFetching = false;
      state.products = action.payload;
    },
    OrderFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  OrderStart: OrderStart,
  OrderSuccess: OrderSuccess,
  OrderFailure: OrderFailure,
} = orderSlice.actions;

export default orderSlice.reducer;