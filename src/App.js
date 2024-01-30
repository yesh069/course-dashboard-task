import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchCourses } from './redux/actions/courseActions';
import { fetchEnrolledCourses } from './redux/actions/studentActions';
import CourseListing from './components/CourseListing';
import CourseDetails from './components/CourseDetails';
import StudentDashboard from './components/StudentDashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCourses());
    // Assuming you have a studentId, replace 'yourStudentId' with the actual studentId
    dispatch(fetchEnrolledCourses('1'));
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand as={Link} to="/">Course Listing</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/student-dashboard">Dashboard</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes>
          <Route path="/" element={<CourseListing />} />
          <Route path="/course-details/:id" element={<CourseDetailsWrapper />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

const CourseDetailsWrapper = () => {
  const { id } = useParams();
  return <CourseDetails courseId={id} />;
};
