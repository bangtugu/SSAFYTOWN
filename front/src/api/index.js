import axios from "axios";
import { BASE_URL } from "@/config";

function apiInstance() {
  const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
      "Content-type": "application/json",
    },
  });
  return instance;
}

export { apiInstance };
