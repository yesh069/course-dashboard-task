// studentActions.js
import { dummyEnrolledCourses } from '../../services/api';

// Action Types
export const FETCH_ENROLLED_COURSES_REQUEST = 'FETCH_ENROLLED_COURSES_REQUEST';
export const FETCH_ENROLLED_COURSES_SUCCESS = 'FETCH_ENROLLED_COURSES_SUCCESS';
export const FETCH_ENROLLED_COURSES_FAILURE = 'FETCH_ENROLLED_COURSES_FAILURE';

export const MARK_COURSE_COMPLETED_REQUEST = 'MARK_COURSE_COMPLETED_REQUEST';
export const MARK_COURSE_COMPLETED_SUCCESS = 'MARK_COURSE_COMPLETED_SUCCESS';
export const MARK_COURSE_COMPLETED_FAILURE = 'MARK_COURSE_COMPLETED_FAILURE';


// Action Creators
export const fetchEnrolledCoursesRequest = () => ({
  type: FETCH_ENROLLED_COURSES_REQUEST,
});

export const fetchEnrolledCoursesSuccess = (enrolledCourses) => ({
  type: FETCH_ENROLLED_COURSES_SUCCESS,
  payload: enrolledCourses,
});

export const fetchEnrolledCoursesFailure = (error) => ({
  type: FETCH_ENROLLED_COURSES_FAILURE,
  payload: error,
});

export const markCourseCompletedRequest = () => ({
  type: MARK_COURSE_COMPLETED_REQUEST,
});

export const markCourseCompletedSuccess = (courseId) => ({
  type: MARK_COURSE_COMPLETED_SUCCESS,
  payload: courseId,
});

export const markCourseCompletedFailure = (error) => ({
  type: MARK_COURSE_COMPLETED_FAILURE,
  payload: error,
});

// Async Action Creators (Using dummy data directly)
export const fetchEnrolledCourses = () => {
  return async (dispatch) => {
    dispatch(fetchEnrolledCoursesRequest());

    try {
      // Use dummyEnrolledCourses directly instead of making an API call
      dispatch(fetchEnrolledCoursesSuccess(dummyEnrolledCourses));
    } catch (error) {
      dispatch(fetchEnrolledCoursesFailure(error.message));
    }
  };
};

// Async Action Creator (Using dummy function, no actual data is updated)
export const markCourseAsCompleted = (courseId) => {
  return async (dispatch) => {
    dispatch(markCourseCompletedRequest());

    try {
      // Dummy function, no actual data is updated
      await Promise.resolve();
      dispatch(markCourseCompletedSuccess(courseId));
    } catch (error) {
      dispatch(markCourseCompletedFailure(error.message));
    }
  };
};
