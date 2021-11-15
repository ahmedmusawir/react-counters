import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import './Page.scss';

function Page({ wide, children }) {
  if (wide) {
    return (
      <div className='page'>
        <Container fluid>{children}</Container>
      </div>
    );
  } else {
    return (
      <div className='page'>
        <Container>{children}</Container>
      </div>
    );
  }
}

Page.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Page;
