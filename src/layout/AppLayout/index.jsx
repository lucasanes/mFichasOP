import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Menu } from "../../components/Menu";
import { MenuBottom } from "../../components/MenuBottom";
import { MenuBottomFicha } from "../../components/MenuBottomFicha";
import { MenuFicha } from "../../components/MenuFicha";
import { useAuth } from "../../hooks/auth";
import { Container, ContentWrapper } from "./styles";

export function AppLayout() {

  const {token} = useAuth()
  const location = useLocation()

  useEffect(() => {

    document.addEventListener('touchend', (e) => {
      if (e.target.tagName == 'BUTTON') {
        e.target.blur()
      }
    })

  }, [])

  

  return (
    <Container>
      {!location.pathname.startsWith('/ficha/') ? <Menu/> : <MenuFicha/>}

      <ContentWrapper auth={location.pathname.startsWith('/ficha/') ? 'trueficha' : (token != undefined && token != null) ? 'true' : 'false'}>
        <Outlet />
      </ContentWrapper>

      {(token != null && token != undefined && !location.pathname.startsWith('/ficha/')) && <MenuBottom/>}
      {location.pathname.startsWith('/ficha/') && <MenuBottomFicha/>}
    </Container>
  );
}
