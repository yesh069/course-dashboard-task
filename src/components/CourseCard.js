import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const CourseCard = ({ course }) => {
  // Check if the course is not defined
  if (!course) {
    return <div>No course data</div>;
  }

  const { id, name, instructor, enrollmentStatus, duration } = course;

  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <p>Instructor: {instructor}</p>
          <p>Enrollment Status: {enrollmentStatus}</p>
          <p>Duration: {duration}</p>
        </Card.Text>
        {/* Link to view details only if course id is available */}
        {id && (
          <Link to={`/course-details/${id}`}>
            <Button variant="primary">View Details</Button>
          </Link>
        )}
      </Card.Body>
    </Card>
  );
};

CourseCard.propTypes = {
  course: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    instructor: PropTypes.string.isRequired,
    enrollmentStatus: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
  }),
};



export default CourseCard;
