import React, { Fragment } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import classes from './Header.module.css';

const Header = () => (
  <Fragment>
      <header>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" className={[
        classes.Header,
        'w-100'
        ].join(' ')}>
          <Navbar.Brand className="text-white text-center">Axios-CRUD</Navbar.Brand>
        </Navbar>
      </header>
  </Fragment>
);

export default Header;
