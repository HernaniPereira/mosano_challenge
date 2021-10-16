import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

const header = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 20,
      }}
    >
      <View style={styles.header}>
        <View>
          <Text>sfsdfsdf</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default header;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {},
});
