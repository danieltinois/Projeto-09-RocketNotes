import axios from "axios";

export const api = axios.create({
  baseURL: "https://rocketnotes-api-0qg7.onrender.com",
});
