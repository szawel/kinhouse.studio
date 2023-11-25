//Categories
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Categories.css';

const Categories = ({ text }) => {
  return (
    <div className="categories-container">
      <div className="categories-wrapper">
        <div className='categories-text'>{text}</div>
      </div>
    </div>
  );
};

Categories.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Categories;
