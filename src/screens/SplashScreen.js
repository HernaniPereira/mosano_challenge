import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { loadLogin } from "../redux/actions";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SplashScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    readData();
  }, []);

  const readData = async () => {
    try {
      const data = await AsyncStorage.getItem("user");
      if (data !== null) {
        dispatch(loadLogin(data));
      } else {
        navigation.replace("Login");
      }
    } catch (e) {
      console.log(e);
      navigation.replace("Login");
    }
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image
        style={{ width: 300, height: 200 }}
        source={require("../../assets/loading.gif")}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
