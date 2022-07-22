// ACTION TYPE DARK_MODE
export const DARK_MODE = 'DARK_MODE';

// ACTION CREATOR DARK_MODE
export const darkMode = () => ({
  type: DARK_MODE,

});

// ACTION TYPE SEND_MESSAGE
export const SEND_MESSAGE = 'SEND_MESSAGE';
// ACTION CREATOR sendMessage
export const sendMessage = (value, name) => ({
  type: SEND_MESSAGE,
  value,
  name,
});

// ACTION TYPE CONFIRM_MAIL
export const CONFIRM_MAIL = 'CONFIRM_MAIL';

// ACTION CREATOR cconfirmMail
export const confirmMail = () => ({
  type: CONFIRM_MAIL,
  
});


// ACTION TYPE TOGGLE_OPEN
export const TOGGLE_OPEN = 'TOGGLE_OPEN';

// ACTION CREATOR toggle_open
export const toggleOpen = () => ({
  type: TOGGLE_OPEN,
  
});
