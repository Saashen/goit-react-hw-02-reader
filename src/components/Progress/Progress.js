import React from 'react';
import PropTypes from 'prop-types';

const Progress = ({ index, length }) => (
  <p>
    {index + 1}/{length}
  </p>
);

Progress.propTypes = {
  index: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
};

export default Progress;
