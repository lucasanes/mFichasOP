import { Outlet, useLocation } from "react-router-dom";
import { Menu } from "../../components/Menu";
import { MenuBottom } from "../../components/MenuBottom";
import { useAuth } from "../../hooks/auth";
import { Container, ContentWrapper } from "./styles";

export function AppLayout() {

  const {token} = useAuth()
  const location = useLocation()

  return (
    <Container>
      {!location.pathname.startsWith('/ficha/') ? <Menu/> : <Menu/>}

      <ContentWrapper auth={token != null && token != undefined}>
        <Outlet />
      </ContentWrapper>

      {(token != null && token != undefined && !location.pathname.startsWith('/ficha/')) && <MenuBottom/>}
    </Container>
  );
}
