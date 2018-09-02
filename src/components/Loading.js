import React from "react";
import { StyleSheet, Text, View } from "react-native";
import FontAwesome, { Icons } from "react-native-fontawesome";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
const Loading = () => (
  <View style={styles.container}>
    <Text>Loading...</Text>
  </View>
);

Loading.displayName = "Loading";

export default Loading;
