import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Platform, StatusBar } from "react-native";
import FormInput from "../components/FormInput";
import { useDispatch, useSelector } from "react-redux";
import { CommonActions } from "@react-navigation/native";
import { login } from "../redux/actions";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { user } = useSelector((state) => state.membersReducer);
  const [age, setAge] = useState("");
  const readData = async () => {
    try {
      const userAge = await AsyncStorage.getItem("user");

      if (userAge !== null) {
        console.log(userAge);
      }
    } catch (e) {
      alert("Failed to fetch the data from storage");
    }
  };
  useEffect(() => {
    readData();
  }, []);

  const dispatch = useDispatch();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image source={require("../../assets/logo_big.png")} />
      </View>
      <View style={{ width: "100%", marginTop: 30 }}>
        <FormInput
          label={"Email"}
          placeHolder={"Email"}
          value={username}
          onChangeText={setUsername}
        />
        <FormInput
          label={"Senha"}
          placeHolder={"Senha"}
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <View style={{ width: "100%" }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#1E22AA",
            marginTop: 40,
            marginEnd: 16,
            marginStart: 16,
          }}
          onPress={() =>
            dispatch(
              login({
                username: username,
                password: password,
              })
            )
          }
        >
          <View style={{ alignItems: "center", padding: 10 }}>
            <Text style={{ color: "white", fontWeight: "700" }}>Entrar</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
