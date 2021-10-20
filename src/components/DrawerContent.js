import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

const DrawerContent = ({ props, navigation }) => {
  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Text style={{ fontWeight: "700", fontSize: 20 }}>Membros</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginTop: 30 }}
            onPress={() => dispatch(logout())}
          >
            <Text style={{ fontWeight: "700", fontSize: 20 }}>Sair</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({});
