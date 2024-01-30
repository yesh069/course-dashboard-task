import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const CourseDetails = ({ courseId }) => {
  const courseDetails = useSelector((state) => state.course.courseDetails);

  if (!courseDetails || !courseDetails[courseId - 1]) {
    return <p>Course not found</p>;
  }

  const course = courseDetails[courseId - 1];

  return (
    <Container className="my-5">
    <h1 className="mb-4">Course Details</h1>
    <Card>
      <Card.Body>
      <div className="d-flex">
        <div className="flex-grow-1">
        <Card.Title>{course.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Instructor: {course.instructor}</Card.Subtitle>
        {course.description && <Card.Text className="mb-2">Description: {course.description}</Card.Text>}
        <Card.Text>Enrollment Status: {course.enrollmentStatus}</Card.Text>
        <Card.Text>Duration: {course.duration}</Card.Text>
        <Card.Text>Schedule: {course.schedule}</Card.Text>
        <Card.Text>Location: {course.location}</Card.Text>

        {course.prerequisites && course.prerequisites.length > 0 && (
          <Card.Text>Prerequisites: {course.prerequisites.join(', ')}</Card.Text>
        )}

        <details>
          <summary>Syllabus</summary>
          <ul>
            {course.syllabus &&
              Array.isArray(course.syllabus) &&
              course.syllabus.map((week) => (
                <li key={week.week}>
                  <strong>Week {week.week}:</strong> {week.topic} - {week.content}
                </li>
              ))}
          </ul>
        </details> </div>
        {course.imageUrl && (
          <div className="ml-4">
            <Card.Img src={course.imageUrl} alt={course.name} style={{ maxWidth: '200px' }} />
          </div>
        )}
        </div>
      </Card.Body>
    </Card>
  </Container>
  );
};

CourseDetails.propTypes = {
  courseId: PropTypes.string.isRequired,
};

export default CourseDetails;
