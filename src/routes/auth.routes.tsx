import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login.";

type AuthRoutes = {
  signIn: undefined;
  signUp: undefined;
};

const Stack = createNativeStackNavigator();
export function AuthRoutes() {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="login"
          component={Login}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </>
  );
}
