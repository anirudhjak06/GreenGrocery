import axios from "axios";

const BASE_URL = "https://greengrocery30.herokuapp.com/api/";
// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTI0ZjM4NjRhODM2YTJiZTFiYWZlMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MTcxODMyOCwiZXhwIjoxNjQxOTc3NTI4fQ.BHKvrS09UpdDaToxnbbJzQeat-vcSXC2LJcxD0aYo1k";

// console.log(localStorage.getItem("persist:root"));

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
