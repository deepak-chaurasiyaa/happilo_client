import React from 'react';
import swal from 'sweetalert';
import * as Yup from 'yup';

import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Box, Typography } from '@mui/material';

import Header from '../header/Header';
import SubFooter from '../footer/SubFooter';

import { LOGIN } from '../../shared/common';
import { GoogleLoginPage } from './GoogleLogin';
import { Validate } from '../../shared/validators';
import { InputField, PasswordInputField } from '../common/CommonInput';
import { encryptValueToCode, getRandomString } from '../../shared/helpers/helper';
import { loginUserAsync } from '../../redux/actions/user.actions';

// const encryptData = (data) => {
//   const key = 'secret_key'; // Replace with your own secret key
//   return CryptoJS.AES.encrypt(data, key).toString();
// };

export default function Login() {

  const dispatch = useDispatch();
  
  const { isLoading } = useSelector((state) => state.user);
  const validateLogin = Yup.object().shape({
    email: Validate.email,
    password: Validate.password,
  });

  const initialValues = {
    email: '',
    password: '',
  };

  const HandleLogin = async (values) => {
    let loginData = {}
    const salt = getRandomString(32);
    const encryptPassword = encryptValueToCode(values.password, salt);

    loginData = {
      ...values,
      password:encryptPassword+'#=='+salt
    };

    try {
      const action = await dispatch(loginUserAsync(loginData));
      const { payload, error } = action;
      if (payload && payload.success === 1) {
            swal({
              title: 'success',
              text: payload.message,
              icon: 'success',
              // dangerMode: true,
            });
      } else {
            swal({
              title: 'Error',
              text: payload.message ,
              icon: 'error',
            });
      }
       
    } catch (error) {
      // Handle the error here
      console.error('Login error:', error.response.data); // Access the error message from the response
    }
    
    // try {
    //   const action =  dispatch(loginUserAsync(loginData));
    //   console.log("action",action)
    //   const response = action.payload;
    //   const {status, message } = response;
    //   if (status === 1) {
    //     swal({
    //       title: 'success',
    //       text: message,
    //       icon: 'success',
    //       // dangerMode: true,
    //     });
    //   } else {
    //     swal({
    //       title: 'Error',
    //       text: message,
    //       icon: 'error',
    //     });
    //   }
    // } catch (error) {
    //   console.log('Error:', error.message);
    // }
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
              {isLoading && <Box>Loading...</Box>}
              {/* {error && <Box>Error: {error}</Box>} */}
              
              <Link to='/signup'>
                <Typography className='text-center margin-top'>
                  {LOGIN.create}
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
