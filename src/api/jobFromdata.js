import axios from "axios";

const api=axios.create({
    baseURL: "https://server-w0h0.onrender.com/jobs",
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
