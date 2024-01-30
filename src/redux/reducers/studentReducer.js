// studentReducer.js

import {
    FETCH_ENROLLED_COURSES_REQUEST,
    FETCH_ENROLLED_COURSES_SUCCESS,
    FETCH_ENROLLED_COURSES_FAILURE,
    MARK_COURSE_COMPLETED_REQUEST,
    MARK_COURSE_COMPLETED_SUCCESS,
    MARK_COURSE_COMPLETED_FAILURE,
  } from '../actions/studentActions';
  
  const initialState = {
    enrolledCourses: [],
    loading: false,
    error: null,
  };
  
  const studentReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_ENROLLED_COURSES_REQUEST:
      case MARK_COURSE_COMPLETED_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_ENROLLED_COURSES_SUCCESS:
        return {
          ...state,
          loading: false,
          enrolledCourses: action.payload,
        };
      case FETCH_ENROLLED_COURSES_FAILURE:
      case MARK_COURSE_COMPLETED_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case MARK_COURSE_COMPLETED_SUCCESS:
        // Update the completion status of the marked course
        const updatedCourses = state.enrolledCourses.map((course) =>
          course.id === action.payload ? { ...course, completed: true } : course
        );
        return {
          ...state,
          loading: false,
          enrolledCourses: updatedCourses,
        };
      default:
        return state;
    }
  };
  
  export default studentReducer;
  