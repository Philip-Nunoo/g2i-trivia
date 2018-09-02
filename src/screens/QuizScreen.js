import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import SwipeCards from "react-native-swipe-cards";
import { ScreenTitle, Loading, TriviaQuestion } from "./../components";
import { fetchAllTriviaQuestions, saveUserResponse } from "./../actions";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E0E0E0",
    alignItems: "center"
    // justifyContent: "center"
  },
  header: {
    alignItems: "center",
    margin: 20
  },
  current: {
    alignItems: "center",
    margin: 40
  },
  currentText: {
    fontSize: 24
  }
});

class QuizScreen extends Component {
  static displayName = "QuizScreen";
  static navigationOptions = {
    title: "Quiz"
  };

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
      const { navigation: { navigate } = {} } = this.props;

      navigate("Result");
    }
  };

  render() {
    const {
      loading,
      triviaQuestions,
      numberOfQuestions,

      ...props
    } = this.props;
    const { currentCard, currentCardIdx } = this.state;

    return loading ? (
      <Loading />
    ) : (
      <View style={styles.container}>
        <View style={styles.header}>
          {this.state.currentCard && (
            <ScreenTitle>{currentCard.category}</ScreenTitle>
          )}
        </View>
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
        <View style={styles.current}>
          <Text style={styles.currentText}>
            {currentCardIdx + 1} of {triviaQuestions.length}
          </Text>
        </View>
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
