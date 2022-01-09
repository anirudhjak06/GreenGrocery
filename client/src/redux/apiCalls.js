import { loginFailure, loginStart, loginSuccess, logout } from "./userRedux";
import { OrderStart, OrderSuccess, OrderFailure } from "./orderRedux";
import { publicRequest, userRequest } from "../requestMethods";
import { delCart } from "./cartRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const lgout = (dispatch) => {
  dispatch(logout());
};

export const clearCart = (dispatch) => {
  dispatch(delCart());
};

export const addOrder = async (order, dispatch) => {
  dispatch(OrderStart());
  try {
    const res = await publicRequest.post(`/orders`, order);
    dispatch(OrderSuccess(res.data));
  } catch (err) {
    dispatch(OrderFailure());
  }
};