import { React, createContext, useContext, useState } from "react";

const FichaContext = createContext({});

function FichaProvider({ children }) {

  const [nome, setNome] = useState('');
  const [dc, setDc] = useState({})
  // const [ultimaRota, setUltimaRota] = useState('');

  return (
    <FichaContext.Provider
      value={{
        nome,
        setNome,
        dc,
        setDc
        // ultimaRota, 
        // setUltimaRota
      }}
    >
      {children}
    </FichaContext.Provider>
  );
}

function useFicha() {
  const context = useContext(FichaContext);

  return context;
}

export { FichaProvider, useFicha, FichaContext };