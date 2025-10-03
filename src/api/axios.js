import axios from "axios";

const api=axios.create({
    
    baseURL: "http://localhost:8000/api/jobs",
    headers:{
        "content-Type": "application/json",
    },
});
api.interceptors.request.use(config => {
  console.log("🔍 Axios Request:", config.method.toUpperCase(), config.url);
  return config;
});

 

// Fetch all Jobs
export const fetchJobs = async() => {
    const data = await api.get("/api/jobs");
    console.log("d",data);
    return data;
} 

 

export default api;