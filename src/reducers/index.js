// import BlaguesAPI from 'blagues-api';
import {
  
} from '../actions';
// import { SET_JOKES } from '../actions';
// const blagues = new BlaguesAPI(`${process.env.REACT_APP_token}`);
const initialState = {


  settings: {
    darkMode: false,
  },

};

function Reducer(state = initialState, action = {}) {
  switch (action.type) {
    /* case TOGGLE_BLAGUE:
      return {
        ...state,
        settings: {
          ...state.settings,
          // isOpen: !state.settings.isOpen,
          isOpen: true,
        },
      };

    case SET_JOKES:
      return {
        ...state,
        jokes: {
          id: action.id,
          type: action.type,
          joke: action.joke,
          answer: action.answer,
        },
      };

    case DARK_MODE:
      return {
        ...state,
        settings: {
          ...state.settings,
          darkMode: !state.settings.darkMode,
        },
      };

    case SHOW_ANSWER:
      return {
        ...state,
        settings: {
          ...state.settings,
          isAnswerShown: !state.settings.isAnswerShown,
        },
      };
    case HIDE_ANSWER:
      return {
        ...state,
        settings: {
          ...state.settings,
          isAnswerShown: false,
        },
      }; */
    default:
      return state;
  }
}

export default Reducer;
