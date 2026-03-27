import axios from "axios";

const API = axios.create({
  baseURL: "https://udaikot-backend.onrender.com/api",
});

export default API;