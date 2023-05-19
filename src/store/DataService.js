import { http, formData_instance } from "../interceptor";

const get = (url) => {
  return http.get(url);
};

const post = (url, data) => {
  return http.post(url, data);
};

const del = (url) => {
  return http.delete(url);
};
const put = (url, data) => {
  return http.put(url, data);
};

const form_post = (url, image) => {
  return formData_instance.post(url, image);
};
const patch = (url, data) => {
  return http.patch(url, data);
};

const DataService = {
  get,
  post,
  del,
  put,
  form_post,
  patch,
};

export default DataService;
