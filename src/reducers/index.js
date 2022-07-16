// import BlaguesAPI from 'blagues-api';
import { DARK_MODE, BURGER_MENU_OPEN
  
} from '../actions';
// import { SET_JOKES } from '../actions';
// const blagues = new BlaguesAPI(`${process.env.REACT_APP_token}`);
const initialState = {


  settings: {
    darkMode: false,
    burgerMenuOpen: false,
  },

};

function Reducer(state = initialState, action = {}) {
  switch (action.type) {
    

    case DARK_MODE:
      return {
        ...state,
        settings: {
          ...state.settings,
          darkMode: !state.settings.darkMode,
        },
      };

      case BURGER_MENU_OPEN:
      return {
        ...state,
        settings: {
          ...state.navigation,
          burgerMenuOpen: !state.settings.burgerMenuOpen,
        },
      };

    default:
      return state;
  }
}

export default Reducer;
