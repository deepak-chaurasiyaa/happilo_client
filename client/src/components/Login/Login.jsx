import React from 'react';
import * as Yup from 'yup';
import { Formik, Field, Form } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  TextField,
  Button,
  Box,
  Typography,
  Grid,
} from '@mui/material';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(10),
  },
  form: {
    width: '180%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {
  const validateLogin = Yup.object().shape({
    email: Yup.string()
      .trim()
      .required('Please enter your Email Address')
      .email(`Email must be a valid Email Address`)
      .max(80, 'Email can be maximum 80 characters long'),
    password: Yup.string()
      .trim()
      .required('Please enter your Password')
      .min(8, 'Password must be at least 8 characters long')
      .max(20, 'Password can be maximum 20 character long')
      .test(
        'uppercase',
        'Password must contain at least one upper case letter',
        (value) => value && value.match(/^((?=.*[A-Z]){1}).*$/)
      )
      .test(
        'lowercase',
        'Password must contain at least one lower case letter',
        (value) => value && value.match(/^((?=.*[a-z]){1}).*$/)
      )
      .test(
        'specialcharacter',
        'Password must contain at least one special character',
        (value) =>
          value && value.match(/^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1}).*$/)
      )
      .test(
        'digit',
        'Password must contain at least one number',
        (value) => value && value.match(/^(?=.*\d).*$/)
      ),
  });

  const classes = useStyles();

  return (
    <Box sx={{ padding: '7rem' }}>
      <Header />
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        validationSchema={validateLogin}
        onSubmit={values => {
          console.log({ values: values })
        }}
      >
        {/* {formik => {
          console.log(formik)   // ? To get to know all the formik property used in formik.
        }} */}

        {({
          values,
          errors,
          touched,
          isValid,
          handleChange,
          handleBlur,
          isSubmitting,
          setErrors,
        }) => {
          return (
            <Container component='main' maxWidth='xs'>
              <div className={classes.root}>
                <Typography component='h1' variant='h5'>
                  Login
                </Typography>
                <Form className={classes.form}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography className={classes.label}>Email *</Typography>
                    <TextField
                      as={TextField}
                      variant='outlined'
                      margin='dense'
                      required
                      fullWidth
                      id='email'
                      name='email'
                      autoComplete='off'
                      placeholder='Enter email address'
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors?.email && touched?.email ? (
                      <Typography color='error'>{errors?.email}</Typography>
                    ) : null}
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography className={classes.label}>Password *</Typography>
                    <Field
                      as={TextField}
                      variant='outlined'
                      margin='dense'
                      required
                      fullWidth
                      id='password'
                      name='password'
                      autoComplete='off'
                      placeholder='Enter your password'
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors?.password && touched?.password ? (
                      <Typography color='error'>{errors?.password}</Typography>
                    ) : null}
                  </Box>
                  <Link to='/reset-password'>
                    <Typography className='text-center margin-top'>
                      Forgot Your Password?
                    </Typography>
                  </Link>

                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Grid item xs={12} sm={6} md={4}>
                      <Button
                        style={{
                          backgroundColor: '#ffd200',
                          color: '#000000',
                          padding: '1rem 4rem',
                        }}
                        type='submit'
                        variant='contained'
                        className={classes.submit}
                      >
                        Sign In
                      </Button>
                    </Grid>
                  </Box>
                </Form>

                <Link to='/signup'>
                  <Typography className='text-center margin-top'>
                    Create Account
                  </Typography>
                </Link>
              </div>
            </Container>
          )
        }}
      </Formik>
    </Box>
  );
}
