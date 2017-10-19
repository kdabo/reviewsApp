import React from 'react';
import moment from 'moment';

const Date = ({ children }) => (
  <span>{ moment(children).format('DD/MM/YYYY') }</span>
);

export default Date;
