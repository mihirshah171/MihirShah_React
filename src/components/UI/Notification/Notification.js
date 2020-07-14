import React, { Fragment } from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';
import Toast from 'react-bootstrap/Toast';
import classes from './Notification.module.css';

const Notification = (props) => (
    <Fragment>
        <div aria-live="polite" aria-atomic="true" className={classes.Notification}>
            <div className={classes.Toast}>
                <Toast onClose={props.close} show={props.show} {...props}>
                    <Toast.Header>
                        <AiFillCheckCircle className={classes.Icon} />
                        <strong className="mr-auto">Success</strong>
                        <small className="ml-3">Just Now</small>
                    </Toast.Header>
                    <Toast.Body><lable>{props.alert}</lable></Toast.Body>
                </Toast>
            </div>
        </div>
    </Fragment>
);

export default Notification;
