import axios from "axios";

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
});

instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    console.error(error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    console.log("인터넵트 응답 받았어요!");
    return response;
  },

  function (error) {
    console.error(error);
    return Promise.reject(error);
  }
);

export default instance;
