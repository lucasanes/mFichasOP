import axios from "axios";
import { toast } from "react-toastify";

export const api = axios.create({
  baseURL: "https://api.fichasop.com/beta_api.php",
  //baseURL: "https://api.fichasop.com/",
});

api.interceptors.response.use(
  function (response) {
    if (response.data.msg == 'Sua sessão encerrou.') {
      window.location.reload()
    }

    if (response.data.msg == 'Sem permissão.') {
      setTimeout(() => {
        toast.error('Esta ficha está privada.')
      }, 1000);
    }

    if (response.data.msg == 'Ficha não encontrada.') {
      setTimeout(() => {
        toast.error('Ficha não encontrada.')
      }, 1000);
    }

    return response;
  }
)