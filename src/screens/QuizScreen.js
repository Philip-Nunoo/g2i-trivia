import React, { Component } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import SwipeCards from "react-native-swipe-cards";
import { Loading, TriviaQuestion } from "./../components";
import { fetchAllTriviaQuestions, saveUserResponse } from "./../actions";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

class QuizScreen extends Component {
  static displayName = "QuizScreen";
  state = { currentCard: null, currentCardIdx: 0, outOfCards: false };

  componentDidMount() {
    this.props.fetchAllTriviaQuestions();
  }

  handleTrue = triviaQuestion => {
    this.saveResponse(triviaQuestion, true);
  };

  handleFalse = triviaQuestion => {
    this.saveResponse(triviaQuestion, false);
  };

  saveResponse = (triviaQuestion, userResponse) => {
    this.props.saveUserResponse({
      ...triviaQuestion,
      userResponse,
      isValidAnswer:
        userResponse.toString() == triviaQuestion.correct_answer.toLowerCase()
    });
  };

  currentCard = (currentCard, currentCardIdx) => {
    let outOfCards = false;
    if (currentCardIdx === this.props.triviaQuestions.length - 1) {
      outOfCards = true;
    }

    this.setState({ currentCard, currentCardIdx, outOfCards });
  };

  cardRemoved = () => {
    if (this.state.outOfCards) {
      console.log("this.props");
    }
  };

  render() {
    const {
      loading,
      triviaQuestions,
      numberOfQuestions,
      ...props
    } = this.props;
    const { currentCard, currentCardIdx, outOfCards } = this.state;

    return loading ? (
      <Loading />
    ) : (
      <View style={styles.container}>
        {this.state.currentCard && <Text>{currentCard.category}</Text>}
        <SwipeCards
          currentCard={this.currentCard}
          cards={triviaQuestions}
          renderCard={triviaQuestion => <TriviaQuestion {...triviaQuestion} />}
          renderNoMoreCards={() => (
            <View>
              <Text>No more cards </Text>
            </View>
          )}
          handleYup={this.handleTrue}
          handleNope={this.handleFalse}
          yupText="True"
          nopeText="False"
          cardRemoved={this.cardRemoved}
        />
        <Text>
          {currentCardIdx + 1} of {triviaQuestions.length}
        </Text>
        {outOfCards && <Text>Last</Text>}
      </View>
    );
  }
}

const mapStateToProps = ({ triviaGame: { loading, triviaQuestions } }) => ({
  loading,
  triviaQuestions
});

const mapDispatchToProps = {
  fetchAllTriviaQuestions,
  saveUserResponse
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizScreen);
