// courseActions.js
import { dummyCourses } from '../../services/api';
// Action Types
export const FETCH_COURSES_REQUEST = 'FETCH_COURSES_REQUEST';
export const FETCH_COURSES_SUCCESS = 'FETCH_COURSES_SUCCESS';
export const FETCH_COURSES_FAILURE = 'FETCH_COURSES_FAILURE';

export const LIKE_COURSE = 'LIKE_COURSE';

// Dummy data for courses


// Action Creators
export const fetchCoursesRequest = () => ({
  type: FETCH_COURSES_REQUEST,
});

export const fetchCoursesSuccess = (courses) => ({
  type: FETCH_COURSES_SUCCESS,
  payload: courses,
});

export const fetchCoursesFailure = (error) => ({
  type: FETCH_COURSES_FAILURE,
  payload: error,
});

export const likeCourse = (courseId) => ({
  type: LIKE_COURSE,
  payload: courseId,
});

// Async Action Creator (Using dummy data directly)
export const fetchCourses = () => {
  return async (dispatch) => {
    dispatch(fetchCoursesRequest());

    try {
      // Use dummyCourses directly instead of making an API call
      dispatch(fetchCoursesSuccess(dummyCourses));
    } catch (error) {
      dispatch(fetchCoursesFailure(error.message));
    }
  };
};
