// courseReducer.js

import {
    FETCH_COURSES_REQUEST,
    FETCH_COURSES_SUCCESS,
    FETCH_COURSES_FAILURE,
    LIKE_COURSE,
  } from '../actions/courseActions';
  
  const initialState = {
    courseDetails: null,
    loading: false,
    error: null,
  };
  
  const courseReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_COURSES_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_COURSES_SUCCESS:
        return {
          ...state,
          loading: false,
          courseDetails: action.payload,
        };
      case FETCH_COURSES_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case LIKE_COURSE:
        // Implement logic to handle liking a course (if needed)
        return state;
      default:
        return state;
    }
  };
  
  export default courseReducer;
  