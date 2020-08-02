import {applyMiddleware, createStore} from 'redux';
import thunk from "redux-thunk";
import reducer from './reducer.js';
import {composeWithDevTools} from 'redux-devtools-extension';
import {loadState, saveState} from "./constants";

export const oldState = loadState();

const store = createStore(
  reducer,
  oldState,
  composeWithDevTools(applyMiddleware(thunk)),
);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
