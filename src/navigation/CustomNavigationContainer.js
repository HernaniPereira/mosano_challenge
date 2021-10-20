import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import RootNavigator from "./RootNavigator";
import { useSelector } from "react-redux";

const CustomNavigationContainer = () => {
  const { user } = useSelector((state) => state.membersReducer);

  return (
    <NavigationContainer>
      {user !== null ? <RootNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default CustomNavigationContainer;
