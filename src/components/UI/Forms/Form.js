import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import Button from '../Button/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const RegistrationForm = (props) => {
  const [
    updating,
    setupdating
  ] = useState(false);
  const { data } = props
  const updatedValues = (values) => {
    props.update(
      data._id,
      values
    )
  }
  const submitValues = (values) => {
    props.insert(values)
  }

  return (
    <div>
      <Formik
        initialValues={{
          City: '' || data.City,
          Country: '' || data.Country,
          Department: '' || data.Department,
          Email: '' || data.Email,
          FirstName: '' || data.FirstName,
          Gender: '' || data.Gender,
          LastName: '' || data.LastName,
          State: '' || data.State
        }}
        validationSchema={
          Yup.object().shape({
            City: Yup.string()
              .max(
                20,
                'Must be 20 characters or less'
              )
              .required('City is required'),
            Country: Yup.string().required('Country is required')
              .max(
                20,
                'Must be 20 characters or less'
              ),
            Department: Yup.string()
              .oneOf(
                [
                  'designer',
                  'development',
                  'product',
                  'other'
                ],
                'Invalid Department'
              )
              .required('Please Select Your Department'),
            Email: Yup.string().email('Email is invalid')
              .required('Email is required'),
            FirstName: Yup.string()
              .max(
                15,
                'Must be 15 characters or less'
              )
              .matches(
                /^[A-Za-z]+/,
                'Use Alphabates only'
              )
              .required('First Name is required!'),
            Gender: Yup.string()
              .oneOf(
                [
                  'male',
                  'female',
                  'other'
                ],
                'Select Any One'
              )
              .required('Please Select Your Gender'),
            LastName: Yup.string()
              .max(
                20,
                'Must be 20 characters or less'
              )
              .matches(
                /^[A-Za-z]+/,
                'Use Alphabates only'
              )
              .required('Last name is required'),
            State: Yup.string().required('State is required')
              .max(
                20,
                'Must be 20 characters or less'
              )
          })
        }
        onSubmit={(values, { setSubmitting }) => {
          setupdating(true);
          setTimeout(
            () => {
              setSubmitting(false);
              if (props.title === 'Add') {
                submitValues(values);
              }
              if (props.title === 'Update') {
                updatedValues(values);
              }
            },
            3000
          );
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="form-group">
              <Row>
                <Col>
                  <div className="form-group col">
                    <label htmlFor="FirstName">First Name</label>
                    <Field type="text" name="FirstName" placeholder="First Name" className={[`form-control ${errors.FirstName && touched.FirstName ? 'is-invalid' : ''}`].join(' ')}></Field>
                    <ErrorMessage name="FirstName" component="div" className="invalid-feedback" />
                  </div>
                </Col>
                <Col>
                  <div className="form-group col">
                    <label htmlFor="LastName">Last Name</label>
                    <Field type="text" name="LastName" placeholder="Last Name" className={[`form-control ${errors.LastName && touched.LastName ? 'is-invalid' : ''}`].join(' ')}></Field>
                    <ErrorMessage name="LastName" component="div" className="invalid-feedback" />
                  </div>
                </Col>
              </Row>
              <div className="form-group col">
                <label htmlFor="Email">Email</label>
                <Field type="text" name="Email" placeholder="Email Address" className={[`form-control ${errors.Email && touched.Email ? 'is-invalid' : ''}`].join(' ')}></Field>
                <ErrorMessage name="Email" component="div" className="invalid-feedback" />
              </div>
              <Row>
                <Col>
                  <div className="form-group col">
                    <label htmlFor="City">City</label>
                    <Field type="text" name="City" placeholder="City" className={[`form-control ${errors.City && touched.City ? 'is-invalid' : ''}`].join(' ')}></Field>
                    <ErrorMessage name="City" component="div" className="invalid-feedback" />
                  </div>
                </Col>
                <Col>
                  <div className="form-group col">
                    <label htmlFor="State">State</label>
                    <Field type="text" name="State" placeholder="State" className={[`form-control ${errors.State && touched.State ? 'is-invalid' : ''}`].join(' ')}></Field>
                    <ErrorMessage name="State" component="div" className="invalid-feedback" />
                  </div>
                </Col>
                <Col>
                  <div className="form-group col">
                    <label htmlFor="Country">Country</label>
                    <Field type="text" name="Country" placeholder="Country" className={[`form-control ${errors.Country && touched.Country ? 'is-invalid' : ''}`].join(' ')}></Field>
                    <ErrorMessage name="Country" component="div" className="invalid-feedback" />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="form-group col">
                    <label htmlFor="Department">Department</label>
                    <Field name="Department" as="select" className={[`form-control ${errors.Department && touched.Department ? 'is-invalid' : ''}`].join(' ')}>
                      <option value="">Select a job type</option>
                      <option value="designer">Designer</option>
                      <option value="development">Developer</option>
                      <option value="product">Product Manager</option>
                      <option value="other">Other</option>
                    </Field>
                    <ErrorMessage name="Department" component="div" className="invalid-feedback" />
                  </div>
                </Col>
                <Col>
                  <div className="form-group col">
                    <label htmlFor="Gender">Gender</label>
                    <div className="form-control text-center">
                      <Field name="Gender" type="radio" value="male" className={[
                        (errors.Gender && touched.Gender ? 'is-invalid' : ''),
                        ''
                      ].join(' ')}></Field>
                      <strong className="ml-1">Male</strong>
                      <Field name="Gender" type="radio" value="female" className={[
                        (errors.Gender && touched.Gender ? 'is-invalid' : ''),
                        'ml-3'
                      ].join(' ')}></Field>
                      <strong className="ml-1">Female</strong>
                      <Field name="Gender" type="radio" value="other" className={[
                        (errors.Gender && touched.Gender ? 'is-invalid' : ''),
                        'ml-3'
                      ].join(' ')}></Field>
                      <strong className="ml-1">Other</strong>
                    </div>
                    <ErrorMessage name="Gender" component="div" className="invalid-feedback" />
                  </div>
                </Col>
              </Row>
              <div className="form-group text-center mt-3">
                {
                  props.title === 'Add' &&
                                    <div className="d-flex justify-content-center">
                                      <div>
                                        {
                                          updating
                                            ? <strong>Adding New User…</strong>
                                            : <Button
                                              type="submit"
                                              disabled={updating}
                                              btnType="Success"
                                            >
                                                        SUBMIT
                                            </Button>
                                        }
                                      </div>
                                      <div>
                                        {
                                          updating
                                            ? null
                                            : <Button
                                              type="reset"
                                              btnType="Danger"
                                            >
                                                        RESET
                                            </Button>
                                        }
                                      </div>
                                    </div>
                }
                {
                  props.title === 'Update' &&
                                    <div>
                                      {
                                        updating
                                          ? <strong>
                                                    User information updating…
                                          </strong>
                                          : <Button
                                            type="submit"
                                            btnType="Success"
                                            disabled={updating}
                                          >
                                                    UPDATE
                                          </Button>
                                      }
                                    </div>
                }
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;
