import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Button, LinearProgress, Typography, Fade, Grid,InputAdornment } from '@material-ui/core';
import { TextField } from 'formik-material-ui';
import styles from './SignUp.module.css';
import API from '../../../Util/API';
import AccountCircle from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import PublicIcon from '@material-ui/icons/Public';
import { withRouter } from "react-router-dom";

const SignUp = (props) => {
    console.log(props)
    return (
        <Fade in={true} {...(true ? { timeout: 2500 } : {})}>
            <div className={styles.SignUp}>
                <Formik
                    initialValues={{
                        FirstName: '',
                        LastName: '',
                        Email: '',
                        Password: '',
                        ConfirmPassword: '',
                        City: '',
                        State: '',
                        Country: ''
                    }}
                    validate={values => {
                        const errors = {};
                        if (!values.FirstName) {
                            errors.FirstName = 'Required';
                        }
                        if (!values.LastName) {
                            errors.LastName = 'Required';
                        }
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
                        if (!values.ConfirmPassword) {
                            errors.ConfirmPassword = 'Required';
                        }
                        if (values.Password !== values.ConfirmPassword) {
                            errors.ConfirmPassword = 'Paswword Does not Match';
                        }
                        if (!values.City) {
                            errors.City = 'Required';
                        }
                        if (!values.State) {
                            errors.State = 'Required';
                        }
                        if (!values.Country) {
                            errors.Country = 'Required';
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                        setTimeout(() => {
                            setSubmitting(false);
                            API.post("users", values)
                                .then((res) => {
                                    debugger
                                    resetForm();
                                    props.history.push("/login");
                                })
                                .catch((err) => alert(err.response.data.msg));
                        }, 5000);
                    }}
                >
                    {({ submitForm, isSubmitting, resetForm }) => (
                        <>
                            <Typography gutterBottom className={styles.Header} variant="h4" component="h2">
                                Registration Form
                            </Typography>
                            <br />
                            <Form>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={6}>
                                        <Field
                                            component={TextField}
                                            className={styles.Input}
                                            variant="outlined"
                                            name="FirstName"
                                            type="FirstName"
                                            label="FirstName"
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <AccountCircle />
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Field
                                            component={TextField}
                                            className={styles.Input}
                                            variant="outlined"
                                            name="LastName"
                                            type="LastName"
                                            label="LastName"
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <AccountCircle />
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
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
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
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
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Field
                                            component={TextField}
                                            className={styles.Input}
                                            variant="outlined"
                                            type="Password"
                                            label="ConfirmPassword"
                                            name="ConfirmPassword"
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <VpnKeyIcon />
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                        <Field
                                            component={TextField}
                                            className={styles.Input}
                                            variant="outlined"
                                            type="City"
                                            label="City"
                                            name="City"
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <LocationCityIcon />
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                        <Field
                                            component={TextField}
                                            className={styles.Input}
                                            variant="outlined"
                                            type="State"
                                            label="State"
                                            name="State"
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <LocationCityIcon />
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                        <Field
                                            component={TextField}
                                            className={styles.Input}
                                            variant="outlined"
                                            type="Country"
                                            label="Country"
                                            name="Country"
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <PublicIcon />
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                    </Grid>
                                    {isSubmitting && <Grid item xs={12} sm={12}><LinearProgress /></Grid>}
                                    <Grid item xs={12} sm={12} className={styles.Button}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            disabled={isSubmitting}
                                            onClick={submitForm}
                                        >
                                            Submit
                                        </Button>
                                        <Button
                                            className={styles.Reset}
                                            variant="contained"
                                            color="inherit"
                                            disabled={isSubmitting}
                                            onClick={resetForm}
                                        >
                                            RESET
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Form>
                        </>
                    )}
                </Formik>
            </div >
        </Fade >
    );
};

export default withRouter(SignUp);