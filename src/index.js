import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

import App from "./App";
import rootReducer from "./reducers";
import { fetchAllTriviaQuestions } from "./actions/index";

const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(fetchAllTriviaQuestions());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
