import Axios from "axios";

export const http = Axios.create({
  baseURL: "https://dev2.enfono.com/api_rentpe_saas/api/v1/",
  headers: { Accept: "application/json" },
});

http.interceptors.request.use(async (config) => {
  let accessToken = localStorage.getItem("accessToken");
  config.headers["authorization"] = `Bearer ${accessToken}`;
  return config;
});

http.interceptors.response.use(undefined, function (err) {
  var statusCode = err.status;
  if (statusCode === undefined) {
    var lineSplit = err.toString().split("\n")[0].split(" ");
    statusCode = lineSplit[lineSplit.length - 1];
  }
  console.log(statusCode);
  if (statusCode == 401) {
    console.log("here");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    window.location.href = "/auth/sign-in";
  }
});

export const formData_instance = Axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

formData_instance.interceptors.request.use(async (config) => {
  let accessToken = localStorage.getItem("accessToken");
  config.headers["authorization"] = `Bearer ${accessToken}`;
  return config;
});

http.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error) => {
    return Promise.reject(error);
  }
);

formData_instance.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error) => {
    return Promise.reject(error);
  }
);
