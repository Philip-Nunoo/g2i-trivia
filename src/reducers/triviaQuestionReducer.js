import {
  GET_TRIVIA_QUESTIONS,
  GET_TRIVIA_QUESTIONS_SUCCESS,
  GET_TRIVIA_QUESTIONS_FAIL,
  SAVE_USER_RESPONSE
} from "../actions/types";

const defaultState = { loading: false, triviaQuestions: [], userResponses: [] };

export default function triviaQuestionReducer(state = defaultState, action) {
  switch (action.type) {
    case GET_TRIVIA_QUESTIONS:
      return { ...state, loading: true };
      break;
    case GET_TRIVIA_QUESTIONS_SUCCESS:
      return { ...state, loading: false, triviaQuestions: action.payload.data };
      break;
    case GET_TRIVIA_QUESTIONS_FAIL:
      return { ...state, loading: false, error: "Error fetching questions" };
      break;
    case SAVE_USER_RESPONSE:
      return {
        ...state,
        userResponses: [...state.userResponses, ...action.payload]
      };
      break;
    default:
      return state;
  }
}
