import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default ({ ...props }) => (
  <View style={styles.container}>
    <Text>REsults Screen</Text>
    {/* <Text>You will be presented with 10 True or False questions</Text>
    <Text>Can you score 100%</Text>
    <Button onPress={startGame} title="BEGIN" /> */}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
