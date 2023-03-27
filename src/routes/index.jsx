import { HashRouter } from "react-router-dom";
import { useAuth } from "../hooks/auth";
import { AuthRoutes } from "./auth.routes";
import { UserRoutes } from "./user.routes";

export function Routes() {

  const {user} = useAuth()

  return (
    <HashRouter>
      {user ?
        <UserRoutes/> 
      :
        <AuthRoutes/>
      }
    </HashRouter>
  );
}
