import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import axios from "axios";
import thunk from "redux-thunk";
import axiosMiddleware from "redux-axios-middleware";
import rootReducer from "./src/reducers";
import { fetchAllTriviaQuestions } from "./src/actions";
import { HomeScreen, QuizScreen, ResultScreen } from "./src/screens";

const client = axios.create({
  baseURL: "https://opentdb.com/api.php",
  responseType: "json"
});

const store = createStore(
  rootReducer,
  applyMiddleware(axiosMiddleware(client))
);

store.dispatch(fetchAllTriviaQuestions());

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <QuizScreen />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
