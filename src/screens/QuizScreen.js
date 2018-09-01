import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

const QuizScreen = ({ ...props }) => (
  <View style={styles.container}>
    <Text>Quiz Screen 1</Text>
  </View>
);

QuizScreen.displayName = "QuizScreen";

const mapStateToProps = state => {
  // let storedRepositories = state.repos.map(repo => ({ key: repo.id, ...repo }));
  console.log("staet", state);
  return {
    triviaQuestions: []
  };
};

const mapDispatchToProps = null;

export default connect(
  mapDispatchToProps,
  mapDispatchToProps
)(QuizScreen);
