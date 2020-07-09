import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import classes from './Header.module.css';

const Header = () => (
  <Fragment>
    <Container fluid>
      <header>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" className={classes.Header}>
          <Navbar.Brand className="text-white text-center">Axios-CRUD</Navbar.Brand>
        </Navbar>
      </header>
    </Container>
  </Fragment>
);

export default Header;
