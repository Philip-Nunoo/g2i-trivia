import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";
import SwipeCards from "react-native-swipe-cards";
import { AllHtmlEntities as Entities } from "html-entities";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    height: 300,
    borderStyle: "solid",
    borderWidth: 1
  },
  text: {
    fontSize: 24,
    padding: 20,
    textAlign: "center"
  }
});

const entities = new Entities();

const TriviaQuestion = ({ question, key, ...props }) => (
  <View style={[styles.container, { backgroundColor: props.backgroundColor }]}>
    <Text style={styles.text}>{entities.decode(question)}</Text>
  </View>
);

TriviaQuestion.displayName = "TriviaQuestion";
TriviaQuestion.propTypes = {
  triviaQuestion: PropTypes.shape({
    category: PropTypes.string,
    question: PropTypes.string
  })
};

export default TriviaQuestion;
