import React, { useState } from 'react';
import '../index.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import email_icon from '../assests/email.png';
import password_icon from '../assests/password.png';
import { useAuth } from './AuthContext';
import { useHistory } from 'react-router-dom'

const LoginPage = () => {
  const history = useHistory()
  const { login } = useAuth();
  const [errorMessage, setErrorMessage] = useState('')
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });

  // eslint-disable-next-line
  let status = null;
  const handleSubmit = async (values, { resetForm, setStatus }) => {
    try {
      status = null;
      await login(values);
      await history.push('/home');
    } catch (error) {
      setErrorMessage('invalid credentials: please enter valid email and password.');
    } finally {
      resetForm()
    }

  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">  Login </div>
      </div>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        <Form className="inputs">

          <div className="input">
            <img src={email_icon} alt="" />
            <Field type="email" name="email" placeholder="Email-Id" />
            <div className="error-message">
              <ErrorMessage name="email" />
            </div>
          </div>

          <div className="input">
            <img src={password_icon} alt="" />
            <Field type="password" name="password" placeholder="Password" />
            <div className="error-message">
              <ErrorMessage name="password" />
            </div>
          </div>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <div className="phrase">
            <div>
              Do not have an account?{' '}
              <a href="/signup" className='forgot-password'> Register</a>
            </div>
            <div />

          </div>
          <div className="submit-container">
            <div>
              <button type="submit" className="submit">
                Login
              </button>
            </div>
          </div>
        </Form>

      </Formik>
    </div>
  );
};

export default LoginPage;
