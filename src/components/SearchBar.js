// SearchBar.js

import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <Form style={searchBarStyle}>
      <Form.Group controlId="search">
        <Form.Label></Form.Label>
        <Form.Control
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Enter course name or instructor"
          style={inputStyle}
        />
      </Form.Group>
    </Form>
  );
};

SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};

const searchBarStyle = {
  margin: '20px 0',
};

const inputStyle = {
  width: '300px',
  marginLeft: '10px',
};
export default SearchBar;
