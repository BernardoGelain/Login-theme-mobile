import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../pages/Login/Login.";
import Home from "../pages/Home/Home";

type AuthRoutes = {
  signIn: undefined;
  signUp: undefined;
};

const Stack = createNativeStackNavigator();
export function AppRoutes() {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="home"
          component={Home}
        />
      </Stack.Navigator>
    </>
  );
}
