import { StyleSheet } from "react-native";

import { Routes } from "./src/routes/routes";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContextProvider } from "./src/contexts/AuthContext";

import { ThemeContextProvider } from "./src/contexts/ThemeContext";

export default function App() {
  return (
    <ThemeContextProvider>
      <NavigationContainer>
        <AuthContextProvider>
          <Routes />
        </AuthContextProvider>
      </NavigationContainer>
    </ThemeContextProvider>
  );
}
