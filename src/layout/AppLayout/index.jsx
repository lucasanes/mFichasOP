import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Menu } from "../../components/Menu";
import { MenuBottom } from "../../components/MenuBottom";
import { MenuBottomFicha } from "../../components/MenuBottomFicha";
import { MenuFicha } from "../../components/MenuFicha";
import { MenuSessao } from "../../components/MenuSessao";
import { useAuth } from "../../hooks/auth";
import { Container, ContentWrapper } from "./styles";

export function AppLayout() {

  const {token} = useAuth()
  const location = useLocation()

  return (
    <Container>
      {!location.pathname.startsWith('/ficha/') && !location.pathname.startsWith('/criar-ficha') && !location.pathname.startsWith('/sessao/') ? <Menu/> : location.pathname.startsWith('/sessao/') ? <MenuSessao/> : <MenuFicha/>}

      <ContentWrapper auth={location.pathname.startsWith('/ficha/') || location.pathname.startsWith('/sessao/') ? 'trueficha' : (token != undefined && token != null) ? 'true' : 'false'}>
        <Outlet/>
      </ContentWrapper>
    </Container>
  );
}
