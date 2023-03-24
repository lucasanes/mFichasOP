import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks/auth";
import { UserRoutes } from "./user.routes";

export function Routes() {

  return (
    <BrowserRouter>
      <UserRoutes/>
    </BrowserRouter>
  );
}
