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

// ACTION CREATOR confirm_mail
export const confirm_mail = () => ({
  type: CONFIRM_MAIL,
  
});


// ACTION TYPE BURGER_MENU_OPEN
export const BURGER_MENU_OPEN = 'BURGER_MENU_OPEN';
// ACTION CREATOR burgerMenuOpen
export const burgerMenuOpen = () => ({
  type: BURGER_MENU_OPEN,
});