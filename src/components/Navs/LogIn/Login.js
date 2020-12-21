import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Button, LinearProgress, Card, Typography, CardActions, Fade, InputAdornment } from '@material-ui/core';
import { TextField } from 'formik-material-ui';
import EmailIcon from '@material-ui/icons/Email';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import styles from './Login.module.css';
import GoogleButton from '../../Buttons/GoogleButton'
import API from '../../../Util/API';
import { withRouter, NavLink } from "react-router-dom";

const Login = (props) => {
    return (
        <Fade in={true} {...(true ? { timeout: 2500 } : {})}>
            <div className={styles.LogIn}>
                <Formik
                    initialValues={{
                        Email: '',
                        Password: '',
                        customized: ''
                    }}
                    validate={values => {
                        const errors = {};
                        if (!values.Email) {
                            errors.Email = 'Required';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)
                        ) {
                            errors.Email = 'Invalid Email address';
                        }
                        if (!values.Password) {
                            errors.Password = 'Required';
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            setSubmitting(false);
                            API.post("users/login", values)
                                .then((res) => {
                                    debugger
                                    localStorage.setItem("access_token", res.data.Data.Token)
                                    localStorage.setItem("access_userId", res.data.Data._id)
                                    API.defaults.headers.common['Authorization'] = res.data.Data.Token;
                                    props.history.push("/u");
                                })
                                .catch((err) => alert(err.response.data.msg));
                        }, 500);
                    }}
                >
                    {({ submitForm, isSubmitting, resetForm }) => (
                        <>
                            <Card className={styles.Card}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Sign in
                            </Typography>
                                <Typography gutterBottom variant="subtitle1" component="h3">
                                    to continue
                            </Typography>
                                <br />
                                <Form>
                                    <Field
                                        component={TextField}
                                        className={styles.Input}
                                        variant="outlined"
                                        name="Email"
                                        type="Email"
                                        label="Email"
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <EmailIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                    <br /> <br />
                                    <Field
                                        component={TextField}
                                        className={styles.Input}
                                        variant="outlined"
                                        type="Password"
                                        label="Password"
                                        name="Password"
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <VpnKeyIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                    {isSubmitting && <><br /><br /><LinearProgress /></>}
                                    <br /><br />
                                    <CardActions className={styles.Actions}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            disabled={isSubmitting}
                                            onClick={submitForm}
                                        >
                                            Submit
                                        </Button>
                                        <Button
                                            variant="contained"
                                            color="inherit"
                                            disabled={isSubmitting}
                                            onClick={resetForm}
                                        >
                                            RESET
                                        </Button>
                                    </CardActions>
                                    <CardActions className={styles.SignUpActions}>
                                        <NavLink to='/signup'>
                                            Create New Account
                                        </NavLink>
                                    </CardActions>
                                    <CardActions className={styles.Actions}>
                                        <GoogleButton />
                                    </CardActions>
                                </Form>
                            </Card>
                        </>
                    )}
                </Formik>
            </div >
        </Fade>
    );
};

export default withRouter(Login);