import PropTypes from "prop-types";
import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const Input = ({ label, error, ...textInputProps }) => {
  const isError = Boolean(error);
  return (
    <View style={{ marginStart: 16, marginEnd: 16, marginTop: 20 }}>
      <Text style={styles.title}>{label}</Text>
      <TextInput
        style={{ borderWidth: 1, height: 40, marginTop: 8, padding: 8 }}
        {...textInputProps}
      />
      {isError && <Text>{error}</Text>}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  title: {
    fontWeight: "700",
    fontSize: 16,
  },
});

Input.propTypes = {
  label: PropTypes.string,
  error: PropTypes.string,
};
