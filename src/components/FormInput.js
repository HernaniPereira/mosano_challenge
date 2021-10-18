import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

const FormInput = ({
  label,
  value,
  onChangeText,
  placeHolder,
  secureTextEntry,
}) => {
  return (
    <View style={{ marginStart: 16, marginEnd: 16, marginTop: 20 }}>
      <Text style={styles.title}>{label}</Text>
      <TextInput
        style={{ borderWidth: 1, height: 40, marginTop: 8, padding: 8 }}
        secureTextEntry={secureTextEntry}
        placeholder={placeHolder}
        autoCorrect={false}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  title: {
    fontWeight: "700",
    fontSize: 16,
  },
});
