import axios from "axios";

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: "https://catfact.ninja/",
});

export default axiosInstance;
