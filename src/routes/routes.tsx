import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";
import { useAuth } from "../hooks/useAuth";

import { ContainerHome } from "../pages/Home/styles";

export function Routes() {
  const { user } = useAuth();

  return (
    <>
      <ContainerHome>
        {user?.user ? <AppRoutes /> : <AuthRoutes />}
      </ContainerHome>
    </>
  );
}
