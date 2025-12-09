import axios from "axios";

const api=axios.create({
    baseURL: "https://contest-rryl.onrender.com/jobs",
    // baseURL: "http://localhost:8000/jobs",
    headers:{
        "content-Type": "application/json",
    },
});
api.interceptors.request.use(config => {
  console.log("🔍 Axios Request:", config.method.toUpperCase(), config.url);
  return config;
});

export default api;
