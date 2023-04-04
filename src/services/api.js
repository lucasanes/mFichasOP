import axios from "axios";

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