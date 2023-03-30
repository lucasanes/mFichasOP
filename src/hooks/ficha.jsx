import { React, createContext, useContext, useState } from "react";

const FichaContext = createContext({});

function FichaProvider({ children }) {

  const [nome, setNome] = useState('');
  const [body, setBody] = useState('principal');
  // const [ultimaRota, setUltimaRota] = useState('');

  return (
    <FichaContext.Provider
      value={{
        nome,
        setNome,
        body,
        setBody,
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