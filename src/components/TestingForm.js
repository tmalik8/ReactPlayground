
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignupForm = () => {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        lastName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        email: Yup.string()
          .email('Invalid email address')
          .required('Required'),
      })}
      onSubmit={values => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {() => (
        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" data-testid="firstName"/>
          <div data-testid="firstNameError"><ErrorMessage name="firstName"/></div>
          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" data-testid="lastName"/>
          <div data-testid="lastNameError"><ErrorMessage name="lastName"/></div>
          <label htmlFor="email">Email</label>
          <Field name="email" type="email" data-testid="email"/>
          <div data-testid="emailError"><ErrorMessage name="email"/></div>
          <button type="submit" data-testid="Submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;