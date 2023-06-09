import { React, createContext, useContext, useState } from "react";

const SessaoContext = createContext({});

function SessaoProvider({ children }) {

  const [nome, setNome] = useState('');

  return (
    <SessaoContext.Provider
      value={{
        nome,
        setNome,
      }}
    >
      {children}
    </SessaoContext.Provider>
  );
}

function useSessao() {
  const context = useContext(SessaoContext);

  return context;
}

export { SessaoProvider, useSessao, SessaoContext };