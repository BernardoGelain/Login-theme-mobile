import { useContext } from "react";

import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";
import { useAuth } from "../hooks/useAuth";
import { AuthContextProvider } from "../contexts/AuthContext";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home/Home";

export function Routes() {
  //  const { colors } = useTheme();

  const { user } = useAuth();

  //const theme = DefaultTheme;
  //theme.colors.background = colors.gray[700];

  return <>{user?.user ? <AppRoutes /> : <AuthRoutes />}</>;
}
