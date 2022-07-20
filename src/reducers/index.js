// import BlaguesAPI from 'blagues-api';
import { DARK_MODE, SEND_MESSAGE, CONFIRM_MAIL, BURGER_MENU_OPEN
  
} from '../actions';
// import { SET_JOKES } from '../actions';
// const blagues = new BlaguesAPI(`${process.env.REACT_APP_token}`);
const initialState = {


  settings: {
    darkMode: true,
    burgerMenuOpen: false,
  },

  contactForm: {
    firstName: "",
    lastName:"",
    phone:null,
    email: "",
    subject:"",
    message:"",
    emailSent: false,
  }

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

      case SEND_MESSAGE: {
        return {
          ...state,
          contactForm: {
            ...state.contactForm,
            [action.name]: action.value,
          },
        };
      }
      
      case CONFIRM_MAIL:{
        return {
          ...state,
          contactForm: {
            firstName: "",
            lastName:"",
            phone:null,
            email: "",
            subject:"",
            message:"",
            emailSent:true,
          }
        }
      }
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
