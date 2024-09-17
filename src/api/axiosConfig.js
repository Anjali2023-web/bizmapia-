import axios from "axios";

export const axiosConfig = axios.create({
  baseURL: "https://bizmapia.com/api/v1/",
});

axiosConfig.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("token");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    config.headers.devicekey = "web";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosConfig.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      // Handle 401 Unauthorized error
      console.error("Unauthorized, please log in again");
    } else if (error.response && error.response.status === 404) {
      console.error("The resource you requested was not found", error);
    } else {
      console.error(
        "Unhandled error:",
        error.response ? error.response.data : error.message
      );
    }
    return Promise.reject(error);
  }
);
