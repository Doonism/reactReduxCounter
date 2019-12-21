import { createStore } from 'redux';
import counterReducer from './reducers/counterReducer'
// import { combineReducers } from 'redux'

const initialState = {
  counter: 0,
}

// const rootReducer = combineReducers({counterReducer});

const store = createStore(counterReducer, initialState);

export default store;