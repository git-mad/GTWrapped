import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import Default from "./components/Default";
import Map from "./Map";
import TestLogin from "./components/TestLogin";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { NavigationContainer } from "@react-navigation/native";
import InsightNavigator from "./components/InsightNavigator";

const Tab = createMaterialBottomTabNavigator();

export default Dashboard = () => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen
          name="Login"
          component={TestLogin}
          options={{
            tabBarLabel: "Login",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Home"
          component={InsightNavigator}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Map"
          component={Map}
          options={{
            tabBarLabel: "Map",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="map" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
