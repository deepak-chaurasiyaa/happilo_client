import React from 'react';
import axios from 'axios';
import CryptoJS from 'crypto-js';
import * as Yup from 'yup';

import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';
import { Button, Box, Typography } from '@mui/material';

import Header from '../header/Header';
import SubFooter from '../footer/SubFooter';

import { LOGIN } from '../../shared/common';
import { GoogleLoginPage } from './GoogleLogin';
import { Validate } from '../../shared/validators';
import { InputField, PasswordInputField } from '../common/CommonInput';

const encryptData = (data) => {
  const key = 'secret_key'; // Replace with your own secret key
  return CryptoJS.AES.encrypt(data, key).toString();
};

export default function Login() {
  const validateLogin = Yup.object().shape({
    email: Validate.email,
    password: Validate.password,
  });

  const initialValues = {
    email: '',
    password: '',
  };

  const HandleLogin = async (values) => {
    const encryptedEmail = encryptData(values.email);
    const encryptedPassword = encryptData(values.password);

    const encryptedValues = {
      email: encryptedEmail,
      password: encryptedPassword,
    };

    try {
      const response = await axios.post(
        'http://localhost:3005/api/user/encryption',
        encryptedValues
      );
      console.log({ response });
    } catch (err) {
      console.log({ err });
    }
    console.log({ encryptedValues });
  };
  return (
    <Box>
      <Header />
      <Box className='login-signup-forgot'>
        <Formik
          initialValues={initialValues}
          validationSchema={validateLogin}
          onSubmit={HandleLogin}
        >
          <Form>
            <Typography variant='h4' align='center'>
              {LOGIN.heading}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <InputField label='Email' name='email' type='email' />
              <PasswordInputField
                label='Password'
                name='password'
                type='password'
              />

              <Link to='/reset-password'>
                <Typography className='text-center margin-top'>
                  {LOGIN.forgot_password}
                </Typography>
              </Link>
              <Box
                className='MuiAutocomplete-endAdornment'
                sx={{ marginBottom: '1rem' }}
              >
                <GoogleLoginPage />
              </Box>
              <Button className='yellow-button' type='submit'>
                {LOGIN.submit}
              </Button>
              <Link to='/signup'>
                <Typography className='text-center margin-top'>
                  {LOGIN.create}
                </Typography>
              </Link>
            </Box>
          </Form>
        </Formik>
      </Box>
      {/* <form action='/upload' method='post' enctype='multipart/form-data'>
        <input type='file' name='file' multiple />
        <input type='submit' value='Upload' /> */}
      {/* </form> */}

      <SubFooter />
    </Box>
  );
}
