import { GET_TRIVIA_QUESTIONS, SAVE_USER_RESPONSE } from "./types";
import axios from "axios";

const apiUrl =
  "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean";

export function fetchAllTriviaQuestions(amount = 10, difficulty = "hard") {
  return {
    type: GET_TRIVIA_QUESTIONS,
    payload: {
      request: {
        url: `?amount=${amount}&difficulty=${difficulty}&type=boolean`
      }
    }
  };
}

export const savUserResponse = response => {
  return {
    type: SAVE_USER_RESPONSE,
    payload: response
  };
};
