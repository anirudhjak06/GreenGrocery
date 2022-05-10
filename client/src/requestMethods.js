import axios from "axios";

const BASE_URL = "/api/";
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;

// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";
// console.log(TOKEN);
// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTI0ZjM4NjRhODM2YTJiZTFiYWZlMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MTcxODMyOCwiZXhwIjoxNjQxOTc3NTI4fQ.BHKvrS09UpdDaToxnbbJzQeat-vcSXC2LJcxD0aYo1k"
                  // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTI0ZjM4NjRhODM2YTJiZTFiYWZlMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MTcxODMyOCwiZXhwIjoxNjQxOTc3NTI4fQ.BHKvrS09UpdDaToxnbbJzQeat-vcSXC2LJcxD0aYo1k
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
