import React from 'react';
import * as Yup from 'yup';

import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';
import { Button, Box, Typography } from '@mui/material';

import Header from '../header/Header';
import { InputField } from '../common/CommonInput';
import { Validate } from '../../shared/validators';
import SubFooter from '../footer/SubFooter';

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
    <Box>
      <Header />
      <Box sx={{ padding: '10rem 0 0 0rem', width: '50%', margin: 'auto' }}>
        <Formik
          initialValues={initialValues}
          validationSchema={validateLogin}
          onSubmit={HandleLogin}
        >
          <Form>
            <Typography variant='h4' align='center'>
              Login
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <InputField label='Email' name='email' type='email' />
              <InputField label='Password' name='password' type='password' />

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
      <SubFooter />
    </Box>
  );
}
