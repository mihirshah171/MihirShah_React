import React from 'react'
import classes from './Footer.module.css'

const Footer = () => (
  <footer className={classes.Footer}>
    <div className="text-center text-muted">
      <small >
        Copyright &copy; {new Date().getFullYear()}. All Rights Reserved
        </small>
    </div>
  </footer>
);

export default Footer;
