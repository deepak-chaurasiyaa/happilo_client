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
      <Header />
      <Box sx={{ padding: '10rem 0 0 0rem', width: '50%', margin: 'auto' }}>
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
              <InputField label='First Name' name='firstName' type='text' />
              <InputField
                label='Middle Name'
                name='middleName'
                type='text'
                required={false}
              />
              <InputField label='Last Name' name='lastName' type='text' />
              <InputField label='Email' name='email' type='email' />
              <InputField label='Password' name='password' type='password' />
              <InputField
                label='Confirm Password'
                name='confirmPassword'
                type='password'
                placeholder='Please Confirm Password'
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
