import axios from "axios";
import { React, createContext, useContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { api } from "../services/api.js";

const AuthContext = createContext({});

function AuthProvider({ children }) {

  const [data, setData] = useState({});

  async function signIn({username, senha, manterAtivo }) {

    const response = await api.post('/', { query: 'account_user_get', login: username, senha });

    if (response.data.success) {

      const { conta } = response.data;

      api.defaults.headers.common["Authorization"] = `Bearer ${conta.token}`;
      setData({ user: conta, token: conta.token });

      localStorage.setItem("@fichasop:manterAtivo", manterAtivo)
      localStorage.setItem("@fichasop:token", conta.token);

    } else {

      toast.error(response.data.msg)

    }

    return response.data.success
    
  }

  function signOut({location}) {

    localStorage.removeItem("@fichasop:token");
    localStorage.removeItem("@fichasop:manterAtivo");

    if (location != null) {

      if (location.pathname != '/') {
        window.location.replace('/')
      }

    } else {
      window.location.replace('/')
    }
    
    setData({});
    
  }

  useEffect(() => {

    const token = localStorage.getItem("@fichasop:token");
    const manterAtivo = localStorage.getItem("@fichasop:manterAtivo")

    if (token != null && manterAtivo != null) {

      async function fetchData() {

        if (manterAtivo == 'false') {
          signOut({location: null})
        } else {

          const response = await api.post('/', { query: 'account_user_get', sessid: token});

          console.log(response.data)

          const tokenIsValid = response.data.success
          const user = response.data.conta

          if (!tokenIsValid) {
            signOut({location: null})
          } else {
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            setData({ user, token });
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