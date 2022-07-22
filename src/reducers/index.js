// import BlaguesAPI from 'blagues-api';
import { DARK_MODE, SEND_MESSAGE, CONFIRM_MAIL, TOGGLE_OPEN
  
} from '../actions';
// import { SET_JOKES } from '../actions';
// const blagues = new BlaguesAPI(`${process.env.REACT_APP_token}`);
const initialState = {


  settings: {
    darkMode: true,
    toggleOpen: false,
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
      case TOGGLE_OPEN:
      return {
        ...state,
        settings: {
          ...state.settings,
          toggleOpen: !state.settings.toggleOpen,
        },
      };

    default:
      return state;
  }
}

export default Reducer;
