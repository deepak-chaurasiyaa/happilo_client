import React from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { Button, Box, Typography } from '@mui/material';
import Header from '../header/Header';
import SubFooter from '../footer/SubFooter';
import { Validate } from '../../shared/validators';
import { Link } from 'react-router-dom';
import { InputField } from '../common/CommonInput';
import { FORGOT_PASSWORD } from '../../shared/common';

export default function ForgotPassword() {
  const validateForgotPassword = Yup.object().shape({
    email: Validate.email,
  });

  const initialValues = {
    email: '',
  };

  const HandleForgotPassword = (values) => {
    console.log({ values });
  };

  return (
    <Box>
      <Box className='login-signup-forgot'>
        <Header />

        <Formik
          initialValues={initialValues}
          validationSchema={validateForgotPassword}
          onSubmit={HandleForgotPassword}
        >
          <Form>
            <Typography variant='h4' align='center' sx={{ marginTop: '10px' }}>
              {FORGOT_PASSWORD.heading}
            </Typography>
            <Typography className='text-center' margin='0.5rem !important'>
              {FORGOT_PASSWORD.subHeading}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <InputField
                label='Email'
                name='email'
                type='email'
                placeholder='Please Enter Your Email *'
                required
              />

              <Button className='yellow-button margin-top-20' type='submit'>
                {FORGOT_PASSWORD.submit}
              </Button>
              <Link to='/login'>
                <Typography className='text-center margin-top'>
                  {FORGOT_PASSWORD.cancel}
                </Typography>
              </Link>
            </Box>
          </Form>
        </Formik>
      </Box>
      <SubFooter style={{ marginBottom: 'none' }} />
    </Box>
  );
}
