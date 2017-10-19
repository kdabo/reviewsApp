import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ children }) => (
    <span>{ (children) }</span>
);

Comment.propTypes = {
    children: PropTypes.string,
};

export default Comment;
