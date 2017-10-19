import React from 'react';
import PropTypes from 'prop-types';

const Average = ({ children }) => (
    <span>{ (children).toFixed(2) }</span>
);

Average.propTypes = {
    children: PropTypes.number,
};

export default Average;
