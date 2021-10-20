import React from "react";
import PropTypes from "prop-types";

import { Text, View, TextInput, StyleSheet } from "react-native";

export const Input = React.forwardRef((props, forwardedRef) => {
  const { label, placeHolder, error, ...textInputProps } = props;

  const isError = Boolean(error);
  return (
    <View style={{ marginStart: 16, marginEnd: 16 }}>
      {Boolean(label) && <Text style={styles.title}> {label}</Text>}
      <TextInput
        placeHolder={placeHolder}
        style={{ borderWidth: 1, height: 40, marginTop: 8, padding: 8 }}
        {...textInputProps}
        ref={forwardedRef}
      />
      {isError && <Text>{error}</Text>}
      <Text></Text>
    </View>
  );
});

const styles = StyleSheet.create({
  title: {
    fontWeight: "700",
    fontSize: 16,
  },
});
Input.displayName = "Input";

Input.propTypes = {
  label: PropTypes.string,
  placeHolder: PropTypes.string,
  error: PropTypes.string,
};
