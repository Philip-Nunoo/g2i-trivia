import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";
import SwipeCards from "react-native-swipe-cards";

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    height: 300,
    borderStyle: "solid",
    borderWidth: 1
  }
});

const TriviaQuestion = ({ question, key, ...props }) => (
  <View style={[styles.card, { backgroundColor: props.backgroundColor }]}>
    <Text>{question}</Text>
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
