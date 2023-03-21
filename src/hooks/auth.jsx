import { React, createContext, useContext, useState, useEffect } from "react";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { api } from "../services/api.js";

const AuthContext = createContext({});

function AuthProvider({ children }) {

  const [data, setData] = useState({});

  async function signIn({ username, senha, manterAtivo }) {
    try {
      const response = await api.post('/', { query: 'login', login: username, senha });
      console.log(response)
      const { user, token } = response.data;

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setData({ user, token });

      localStorage.setItem("@fichasop:user", JSON.stringify(user));
      localStorage.setItem("@fichasop:manterAtivo", manterAtivo)
      localStorage.setItem("@fichasop:token", token);

    } catch (error) {
      toast.error(error)
      console.log(error)
    }
  }

  function signOut() {

    localStorage.removeItem("@fichasop:token");
    localStorage.removeItem("@fichasop:user");
    localStorage.removeItem("@fichasop:manterAtivo");

    window.location.href = "/"

    setData({});
  }

  useEffect(() => {
    const token = localStorage.getItem("@fichasop:token");
    const user = localStorage.getItem("@fichasop:user");
    const manterAtivo = localStorage.getItem("@fichasop:manterAtivo")

    if (token && user && manterAtivo) {

      async function fetchData() {
        const response = await api.post({query: 'check_session', sessid: token })
        console.log(response)
        const tokenIsValid = response.data.tokenIsValid

        if (manterAtivo == 'false') {
          signOut()
        }

        if (!tokenIsValid) {
          signOut()
        } else {
          api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          setData({ user: JSON.parse(user), token });
        }
      }

      fetchData()
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        user: data.user
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth, AuthContext };