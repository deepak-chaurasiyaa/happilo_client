import React from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import {
  Container,
  TextField,
  Button,
  Box,
  Typography,
  Grid,
} from '@mui/material';
import Header from '../header/Header';
import SubFooter from '../footer/SubFooter';
import { Validate } from '../../shared/validators';
import { Link } from 'react-router-dom';
import { InputField } from '../commonInput/CommonInput';


export default function ForgotPassword() {
  const validateForgotPassword = Yup.object().shape({
    email: Validate.email
  });

  const initialValues = {
    email: '',
  };

  const HandleForgotPassword = (values) => {
    console.log({ values });
  };

  return (
    <Box>
      <Box sx={{ padding: '15rem 0 0 0rem', width: '50%', margin: 'auto' }}>
        <Header />

        <Formik
          initialValues={initialValues}
          validationSchema={validateForgotPassword}
          onSubmit={HandleForgotPassword}
        >
          <Form>
            <Typography variant="h4" align="center">
              RESET YOUR PASSWORD
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

              <Button className='yellow-button' type='submit'>
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
      <SubFooter style={{marginBottom:'none'}}/>
    </Box>
  );
}
