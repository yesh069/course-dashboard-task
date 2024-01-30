// store.js

import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';  // Correct import statement
import courseReducer from './reducers/courseReducer';
import studentReducer from './reducers/studentReducer';


const initialState = {
  course: {
    courseDetails: null,
    // other properties...
  },
  // other reducers...
};

// Combine reducers if you have multiple reducers
const rootReducer = combineReducers({
  course: courseReducer,
  students: studentReducer,
});

// Create the Redux store with combined reducers and middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
