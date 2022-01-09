import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      // const list = state.cart.foreach(product => console.log(product));
      // console.log(cart);
      
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    delCart: (state) => {
      state.quantity = 0;
      while(state.products.length > 0) {
        state.products.pop();
    }
      // state.products = [];
      state.total = 0;
    },
  },
});

export const { addProduct, delCart } = cartSlice.actions;
export default cartSlice.reducer;
