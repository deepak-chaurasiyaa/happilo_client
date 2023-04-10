import React from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { Button, Box, Typography } from '@mui/material';
import Header from '../header/Header';
import SubFooter from '../footer/SubFooter';
import { Validate } from '../../shared/validators';
import { InputField, PasswordInputField } from '../common/CommonInput';
import { SIGNUP } from '../../shared/common';

export default function CreateAccount() {
  const validateCreateAccount = Yup.object().shape({
    firstName: Validate.firstName,
    middleName: Validate.middleName,
    lastName: Validate.lastName,
    email: Validate.email,
    password: Validate.password,
    confirmPassword: Validate.confirmPassword,
  });

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const HandleCreateAccount = (values) => {
    console.log({ values });
  };

  return (
    <Box>
      <Box>
        <Header />
      </Box>
      <Box className='login-signup-forgot'>
        <Formik
          initialValues={initialValues}
          validationSchema={validateCreateAccount}
          onSubmit={HandleCreateAccount}
        >
          {({ values, errors, touched, isSubmitting }) => (
            <Form>
              <Typography
                variant='h4'
                align='center'
                sx={{ marginTop: '10px' }}
              >
                {SIGNUP.heading}
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
                <PasswordInputField
                  label='Password'
                  name='password'
                  type='password'
                />

                <PasswordInputField
                  label='Confirm Password'
                  name='confirmPassword'
                  type='password'
                  placeholder='Please Confirm Password'
                />
                <Button
                  className={`margin-top-20 ${
                    Object.keys(errors).length > 0 ? '' : 'yellow-button'
                  }`}
                  type='submit'
                  disabled={isSubmitting || Object.keys(errors).length > 0}
                >
                  {SIGNUP.create}
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
      <Box>
        <SubFooter />
      </Box>
    </Box>
  );
}
