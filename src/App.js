import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import axios from "axios";
import thunk from "redux-thunk";
import axiosMiddleware from "redux-axios-middleware";
import rootReducer from "./reducers";
import { HomeScreen, QuizScreen, ResultScreen } from "./screens";
import { createStackNavigator } from "react-navigation";

const client = axios.create({
  baseURL: "https://opentdb.com/api.php",
  responseType: "json"
});

const store = createStore(
  rootReducer,
  applyMiddleware(axiosMiddleware(client))
);

const TriviaApp = createStackNavigator(
  {
    Main: { screen: HomeScreen },
    Quiz: { screen: QuizScreen },
    Result: { screen: ResultScreen }
  },
  { headerMode: "none", initialRouteName: "Main" }
);

export default () => (
  <Provider store={store}>
    <TriviaApp />
  </Provider>
);
