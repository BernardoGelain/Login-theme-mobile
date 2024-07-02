import { StyleSheet } from "react-native";

import { Routes } from "./src/routes/routes";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContextProvider } from "./src/contexts/AuthContext";

import { ThemeContextProvider } from "./src/contexts/ThemeContext";
import { RealmProvider } from "./src/libs/realm";

export default function App() {
  return (
    <ThemeContextProvider>
      <NavigationContainer>
        <AuthContextProvider>
          <RealmProvider>
            <Routes />
          </RealmProvider>
        </AuthContextProvider>
      </NavigationContainer>
    </ThemeContextProvider>
  );
}
