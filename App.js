import React, { useState } from "react";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./src/navigation/AuthNavigator";
import RootNavigator from "./src/navigation/RootNavigator";
import CustomNavigationContainer from "./src/navigation/CustomNavigationContainer";
export default function App() {
  const [token, setToken] = useState(true);

  return (
    <Provider store={store}>
      {/*  <NavigationContainer>
        {token ? <RootNavigator /> : <AuthNavigator />}
      </NavigationContainer> */}
      <CustomNavigationContainer />
    </Provider>
  );
}
