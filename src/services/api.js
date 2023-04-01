import axios from "axios";
import { useAuth } from "../hooks/auth";

export const api = axios.create({
  baseURL: "https://api.fichasop.com/",
});

api.interceptors.response.use(
  function (response) {
    if (response.data.msg == 'Sua sessão encerrou.') {
      window.location.reload()
    }

    return response;
  }
)