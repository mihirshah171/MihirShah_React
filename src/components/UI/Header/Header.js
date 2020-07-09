import React, { Fragment } from 'react';
import classes from './Header.module.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';

const Header = () => {
    return (
        <Fragment>
            <Container fluid>
                <header>
                    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed='top' className={classes.Header}>
                        <Navbar.Brand className='text-white'>React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link>Features</Nav.Link>
                                <Nav.Link>Pricing</Nav.Link>
                            </Nav>
                            <Form inline>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2 my-2" />
                                <Button variant="outline-info">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Navbar>
                </header>
            </Container>
        </Fragment>
    );
};

export default Header;