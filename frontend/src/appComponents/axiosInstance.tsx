import axios from "axios";
// const axiosInstance = axios.create({
//   baseURL: "http://localhost:4000",
// });
const axiosInstance = axios.create({
  baseURL: "https://dypcetclubs-live.onrender.com",
});
axiosInstance.defaults.withCredentials = true;

export default axiosInstance;
