// CourseListing.js

import React, { useState, useEffect } from 'react';
import CourseCard from './CourseCard';
import SearchBar from './SearchBar';
import { fetchCourses } from '../services/api'; // You need to implement this function
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


const CourseListing = () => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch courses when the component mounts
    const fetchCoursesData = async () => {
      try {
        const coursesData = await fetchCourses(); // Implement this function to fetch courses
        setCourses(coursesData);
        setFilteredCourses(coursesData);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCoursesData();
  }, []);

  // Handle search functionality
  useEffect(() => {
    const filterCourses = () => {
      const filtered = courses.filter(
        (course) =>
          course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCourses(filtered);
    };

    filterCourses();
  }, [searchTerm, courses]);

  return (
    <Container>
    <h1>Course Listing</h1>
    <SearchBar searchTerm={searchTerm} onSearchChange={(value) => setSearchTerm(value)} />

    <Row xs={1} md={2} lg={2} className="g-4">
      {filteredCourses.map((course) => (
        <Col key={course.id}>
          <CourseCard course={course} />
        </Col>
      ))}
    </Row>
  </Container>
  );
};

export default CourseListing;
