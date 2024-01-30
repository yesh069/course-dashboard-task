import React, { useState, useEffect } from 'react';
import EnrolledCourseCard from './EnrolledCourseCard';
import { fetchEnrolledCourses, markCourseAsCompleted } from '../services/api';
import { Row, Col, Card, ProgressBar, Button } from 'react-bootstrap';

const StudentDashboard = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    const fetchEnrolledCoursesData = async () => {
      try {
        const enrolledCoursesData = await fetchEnrolledCourses();
        console.log('Enrolled Courses:', enrolledCoursesData);
        setEnrolledCourses(enrolledCoursesData);
      } catch (error) {
        console.error('Error fetching enrolled courses:', error);
      }
    };
    fetchEnrolledCoursesData();
  }, []);

  const handleMarkAsCompleted = async (courseId) => {
    try {
      // Implement this function to mark a course as completed in the backend
      await markCourseAsCompleted(courseId);

      // Update the local state to reflect the change
      setEnrolledCourses((prevCourses) =>
        prevCourses.map((course) =>
          course.id === courseId
            ? { ...course, completed: true, progress: 100 }
            : course
        )
      );
    } catch (error) {
      console.error('Error marking course as completed:', error);
    }
  };

  return (
    <div className="mt-4">
      <h1 className="mb-4">Student Dashboard</h1>
      <Row>
        {enrolledCourses.map((course) => (
          <Col key={course.id} md={6}>
            <Card>
              <Card.Body>
                <Card.Title>{course.name}</Card.Title>
                <Card.Text>Instructor: {course.instructor}</Card.Text>
                <Card.Text>Due Date: {course.dueDate}</Card.Text>
                <ProgressBar now={course.progress} label={`${course.progress}%`} className="mb-3" />
                <Button
                  variant="primary"
                  disabled={course.completed}
                  onClick={() => handleMarkAsCompleted(course.id)}
                >
                  {course.completed ? 'Completed' : 'Mark as Completed'}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default StudentDashboard;
