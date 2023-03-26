import React from 'react';
import * as Yup from 'yup';

import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';
import { Button, Box, Typography } from '@mui/material';

import Header from '../Header/Header';
import { InputField } from '../commonInput/CommonInput';
import { Validate } from '../../shared/validators';

export default function Login() {
  const validateLogin = Yup.object().shape({
    email: Validate.email,
    password: Validate.password,
  });

  const initialValues = {
    email: '',
    password: '',
  };

  const HandleLogin = (values) => {
    console.log({ values });
  };

  return (
    <Box sx={{ padding: '15rem 0 0 0rem', width:'50%', margin:'auto' }}>
      <Header />
      <Formik
        initialValues={initialValues}
        validationSchema={validateLogin}
        onSubmit={HandleLogin}
      >
        <Form>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <InputField
              label='Please Enter Email'
              name='email'
              type='email'
              placeholder='Email'
              required
            />
            <InputField
              label='Please Enter Password'
              name='password'
              type='password'
              placeholder='Password'
              required
            />

            <Link to='/reset-password'>
              <Typography className='text-center margin-top'>
                Forgot Your Password?
              </Typography>
            </Link>

            <Button className='yellow-button' type='submit'>
              Submit
            </Button>
            <Link to='/signup'>
              <Typography className='text-center margin-top'>
                Create Account
              </Typography>
            </Link>
          </Box>
        </Form>
      </Formik>
    </Box>
  );
}
