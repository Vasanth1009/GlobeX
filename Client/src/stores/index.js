import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import userReducer from './userStore';
import wordCountReducer from './wordCountStore';

const reducers = combineReducers({
  user: userReducer,
  wordCounts: wordCountReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
