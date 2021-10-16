import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import MemberDetail from "../screens/MemberDetail";
import Header from "../shared/Header";
import { Text, Image } from "react-native";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const DrawerNavigator = ({ navigation }) => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: () => (
            <Image
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                resizeMode: "contain",
              }}
              source={require("../../assets/Logo.png")}
            />
          ),
          headerTitleAlign: "center",
        }}
      />
    </Drawer.Navigator>
  );
};

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Members"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="MemberDetail" component={MemberDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
