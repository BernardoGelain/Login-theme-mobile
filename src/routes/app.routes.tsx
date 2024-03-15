import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../pages/Login/Login.";
import Home from "../pages/Home/Home";
import ActivitiesPage from "../pages/ActivitiesPage/ActivitiesPage";
import ContractsPage from "../pages/ContractsPage/ContractsPage";
import HiredsPage from "../pages/HiredsPage/HiredsPage";
import MeasurementsPage from "../pages/MeasurementsPage/MeasurementsPage";
import ProjectsPage from "../pages/ProjectsPage/ProjectsPage";
import ReportsPage from "../pages/ReportsPage/ReportsPage";

type AuthRoutes = {
  signIn: undefined;
  signUp: undefined;
};

const Stack = createNativeStackNavigator();
export function AppRoutes() {
  return (
    <>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen
          options={{ headerShown: false }}
          name="home"
          component={Home}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="activities"
          component={ActivitiesPage}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="contracts"
          component={ContractsPage}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="hireds"
          component={HiredsPage}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="measurements"
          component={MeasurementsPage}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="projects"
          component={ProjectsPage}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="reports"
          component={ReportsPage}
        />
      </Stack.Navigator>
    </>
  );
}
