import React from "react";
import { Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    fontSize: 28,
    color: "#000"
  }
});

export default ({ children, ...props }) => (
  <Text style={styles.text}>{children}</Text>
);
