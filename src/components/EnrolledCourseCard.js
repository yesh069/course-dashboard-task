// EnrolledCourseCard.js

import React from 'react';
import PropTypes from 'prop-types';
import { Card, ProgressBar, Button } from 'react-bootstrap';

const EnrolledCourseCard = ({ course, onMarkAsCompleted }) => {
  return (
    <Card style={cardStyle} className="mb-4">
      <Card.Body>
        <Card.Title>{course.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Instructor: {course.instructor}</Card.Subtitle>
        <Card.Text>Due Date: {course.dueDate}</Card.Text>
        <Card.Text>Progress: {course.progress}%</Card.Text>
        <ProgressBar now={course.progress} label={`${course.progress}%`} className="mb-3" />

        <Button variant="primary" onClick={onMarkAsCompleted}>
          Mark as Completed
        </Button>
      </Card.Body>
    </Card>
  );
};

EnrolledCourseCard.propTypes = {
  course: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    instructor: PropTypes.string.isRequired,
    dueDate: PropTypes.string.isRequired,
    progress: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  onMarkAsCompleted: PropTypes.func.isRequired,
};

const cardStyle = {
  margin: '45px'
};

export default EnrolledCourseCard;
