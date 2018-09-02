import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { AllHtmlEntities as Entities } from "html-entities";
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
    marginTop: 60,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 24,
    width: "100%"
  },
  userResponse: {
    justifyContent: "flex-start",
    marginTop: 5,
    marginBottom: 5,
    width: "100%",
    flexDirection: "row"
  },
  iconText: {
    fontSize: 24,
    marginRight: 18
  },
  questionText: {
    paddingRight: 24
  }
});

const entities = new Entities();

const ResultScreen = ({
  userResponses,
  navigation: { navigate } = {},
  ...props
}) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <ScreenTitle>You scored</ScreenTitle>
      <ScreenTitle>
        {userResponses.filter(({ isValidAnswer }) => isValidAnswer).length} /{" "}
        {userResponses.length}
      </ScreenTitle>
    </View>
    <View style={styles.about}>
      {userResponses.map(({ question, isValidAnswer }, index) => (
        <View key={index} style={styles.userResponse}>
          <Text style={styles.iconText}>{isValidAnswer ? "+" : "-"} </Text>
          <Text style={styles.questionText}>{entities.decode(question)}</Text>
        </View>
      ))}
    </View>
    <Button onPress={() => navigate("Main")} title="PLAY AGAIN" />
  </View>
);

ResultScreen.displayName = "ResultScreen";

const mapStateToProps = ({ triviaGame: { loading, userResponses } }) => ({
  loading,
  userResponses
});

export default connect(mapStateToProps)(ResultScreen);
