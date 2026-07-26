import axios from "axios";

const api = axios.create({
    baseURL: "https://ai-interview-backend-two.vercel.app/"
});

export default api;
