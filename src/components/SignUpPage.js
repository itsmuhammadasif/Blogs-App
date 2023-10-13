import React from 'react';
import '../index.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import user_icon from '../assests/person.png';
import email_icon from '../assests/email.png';
import password_icon from '../assests/password.png';
import { useHistory } from 'react-router-dom';
import { useAuth } from './AuthContext';

const SignUpPage = () => {
  const history = useHistory();
  const { signUp } = useAuth();

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });

  const handleSubmit = async (values, { resetForm }) => {
    resetForm();
    signUp(values);
    await history.push('/login');
  };


  return (
    <div className="container">
      <div className="header">
        <div className="text">  SignUp </div>
      </div>

      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        <Form className="inputs">

          <div className="input">
            <img src={user_icon} alt="" />
            <Field type="text" name="name" placeholder="Name" />
            <div className="error-message">
              <ErrorMessage name="name" />
            </div>
          </div>

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

          <div className="submit-container">
            <div>
              <button type="submit" className="submit">
                SignUp
              </button>
            </div>
          </div>

        </Form>

      </Formik>
    </div>
  );
};

export default SignUpPage;
