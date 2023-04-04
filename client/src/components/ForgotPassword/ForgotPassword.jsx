import React from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { Button, Box, Typography } from '@mui/material';
import Header from '../header/Header';
import SubFooter from '../footer/SubFooter';
import { Validate } from '../../shared/validators';
import { Link } from 'react-router-dom';
import { InputField } from '../common/CommonInput';

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
      <Box
        sx={{
          width: '50%',
          margin: 'auto',
          minHeight: '34.9rem',
        }}
      >
        <Header />

        <Formik
          initialValues={initialValues}
          validationSchema={validateForgotPassword}
          onSubmit={HandleForgotPassword}
        >
          <Form>
            <Typography variant='h4' align='center'sx={{marginTop:'10px'}}>
              Reset your password
            </Typography>
            <Typography className='text-center' margin='0.5rem !important'>
              We will send you an email to reset your password.
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
                Submit
              </Button>
              <Link to='/login'>
                <Typography className='text-center margin-top'>
                  Cancel
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
