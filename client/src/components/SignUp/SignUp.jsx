import React from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { Button, Box, Typography } from '@mui/material';
import Header from '../header/Header';
import SubFooter from '../footer/SubFooter';
import { Validate } from '../../shared/validators';
import { InputField } from '../common/CommonInput';

export default function CreateAccount() {
  const validateCreateAccount = Yup.object().shape({
    firstName: Validate.firstName,
    lastName: Validate.lastName,
    email: Validate.email,
    password: Validate.password,
  });

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  const HandleCreateAccount = (values) => {
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
          validationSchema={validateCreateAccount}
          onSubmit={HandleCreateAccount}
        >
          <Form>
            <Typography variant='h4' align='center' sx={{ marginTop: '10px' }}>
              Create Account
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                marginBottom: '0rem !important',
              }}
            >
              <InputField
                label='First Name'
                name='firstName'
                type='firstName'
                placeholder='Please Enter Your First Name *'
                required
                style={{ margin: '0px auto !important' }}
              />
              <InputField
                label='Last Name'
                name='lastName'
                type='lastName'
                placeholder='Please Enter Your Last Name *'
                required
                style={{ margin: '0px auto !important' }}
              />
              <InputField
                label='Email'
                name='email'
                type='email'
                placeholder='Please Enter Your Email *'
                required
                style={{ margin: '0px auto !important' }}
              />
              <InputField
                label='Password'
                name='password'
                type='password'
                placeholder='Please Enter Your Password *'
                required
                style={{ margin: '0px auto !important' }}
              />

              <Button className='yellow-button margin-top-20' type='submit'>
                Create
              </Button>
            </Box>
          </Form>
        </Formik>
      </Box>
      <SubFooter />
    </Box>
  );
}
