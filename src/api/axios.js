import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://www.googleapis.com",
});


export default axiosInstance;
