import React from 'react';
import classes from './Footer.module.css';
import Nav from 'react-bootstrap/Nav';

const Footer = () => {
    return (
        <div>
            <footer className={classes.Footer}>
                <Nav className='justify-content-center'>
                    <Nav.Link>About-Us</Nav.Link>
                    <Nav.Link>Contact-Us</Nav.Link>
                    <Nav.Link>Customer-Service</Nav.Link>
                </Nav>
                <div className="text-center text-muted">
                    <small >Copyright &copy; {new Date().getFullYear()}. All Rights Reserved</small>
                </div>
            </footer>

        </div>
    );
};

export default Footer;