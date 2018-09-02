import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, ScreenTitle } from "./../components";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E0E0E0",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  header: {
    alignItems: "center",
    marginTop: 20,
    height: 50
  },
  about: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "60%"
  },
  text: {
    fontSize: 22,
    textAlign: "center",
    marginBottom: 24
  }
});

const HomeScreen = ({ navigation: { navigate } = {}, ...props }) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <ScreenTitle>Welcome to the</ScreenTitle>
      <ScreenTitle>Trivia Challenge</ScreenTitle>
    </View>
    <View style={styles.about}>
      <Text style={styles.text}>
        You will be presented with 10 True or False questions
      </Text>
      <Text style={styles.text}>Can you score 100%?</Text>
    </View>
    <Button onPress={() => navigate("Quiz")} title="BEGIN" />
  </View>
);

export default HomeScreen;
