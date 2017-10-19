import React from 'react';
import PropTypes from 'prop-types';

const TravelWith = ({ children }) => (
    <span> { (children) } </span>
);

TravelWith.propTypes = {
    children: PropTypes.string.isRequired,
};

export default TravelWith;
