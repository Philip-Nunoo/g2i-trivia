import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  text: {
    color: "#000",
    fontSize: 18
  },
  button: {
    alignItems: "center",
    padding: 18,
    width: "100%",
    position: "absolute",
    bottom: 0,
    left: 0
  }
});

export default ({ title, ...props }) => (
  <TouchableOpacity style={styles.button} {...props}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);
