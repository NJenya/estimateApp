import {combineReducers, createStore} from 'redux';
import signInReducer from './signInReducer';

const reducers = combineReducers({
  signInScreen: signInReducer,
});

const store = createStore(reducers);

export default store;
