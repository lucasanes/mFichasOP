import axios from "axios";
import { React, createContext, useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { api } from "../services/api.js";

const AuthContext = createContext({});

function AuthProvider({ children }) {

  const [data, setData] = useState({});

  async function signIn({username, senha, manterAtivo }) {

    const response = await api.post('/', { query: 'account_get', login: username, senha });

    if (response.data.success) {

      console.log(response)

      const { conta, id } = response.data;

      api.defaults.headers.common["Authorization"] = `Bearer ${id}`;
      setData({ user: 'JSON.parse(conta)', token: id });

      localStorage.setItem("@fichasop:manterAtivo", manterAtivo)
      localStorage.setItem("@fichasop:token", id);

    } else {

      console.log(response.data)
      toast.error(response.data.msg)

    }

    return response.data.success
    
  }

  function signOut({location}) {

    localStorage.removeItem("@fichasop:token");
    localStorage.removeItem("@fichasop:manterAtivo");

    if (location.pathname != '/') {

      window.location.href = "/"

    }

    setData({});
    
  }

  useEffect(() => {

    const token = localStorage.getItem("@fichasop:token");
    const manterAtivo = localStorage.getItem("@fichasop:manterAtivo")

    if (token && manterAtivo) {

      async function fetchData() {

        if (manterAtivo == 'false') {
          signOut()
        } else {

          const response = await api.post('/', { query: 'check_session', sessid: token});

          const tokenIsValid = response.data.success
          const user = response.data.conta

          if (!tokenIsValid) {
            signOut()
          } else {
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            setData({ user: 'JSON.parse(user)', token });
          }
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
        user: data.user,
        token: data.token
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