/* import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

//alex
 */
/* eslint-disable no-underscore-dangle */
// On importe createStore, la fonction proposé par redux
// pour créer un store
import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
// import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
// on importe notre reducer,
// l'élément de notre architecture logicielle
// spécialiste de la modification du state de NOTRE application
import reducer from '../reducers';
//import apiMiddleWare from '../middlewares/api';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  // on le branche sur le store
  //applyMiddleware(apiMiddleWare),
);
// cette fonction permet de créer un store
// générique et de nous le renvoyer
export const store = createStore(reducer, enhancers);

// on met à disposition le store créé
//export default store;
