import React from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import {
  Container,
  TextField,
  Button,
  Box,
  Toolbar,
  Typography,
  Link,
  Grid,
} from '@mui/material';
import Header from '../header/Header';
import SubFooter from '../footer/SubFooter';
import { Validate } from '../../shared/validators';
import { InputField } from '../commonInput/CommonInput';


export default function CreateAccount() {

  const validateCreateAccount = Yup.object().shape({
    firstName: Validate.firstName,
    lastName: Validate.lastName,
    email: Validate.email,
    password: Validate.password
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
      <Box sx={{ padding: '15rem 0 0 0rem', width: '50%', margin: 'auto' }}>
        <Header />

        <Formik
          initialValues={initialValues}
          validationSchema={validateCreateAccount}
          onSubmit={HandleCreateAccount}
        >
          <Form>
            <Typography variant="h4" align="center">
              Create Account
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', marginBottom: '5rem !important' }}>
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

              <Button className='yellow-button' type='submit'>
                Create
              </Button>
            </Box>
          </Form>
        </Formik>
      </Box>
      <SubFooter />
    </Box>
    // <Box sx={{ padding: '5rem' }}>
    //   <Header />
    //   <Container component='main' maxWidth='xs'>
    //     <div className={classes.root}>
    //       <Typography component='h1' variant='h5'>
    //         Create Account
    //       </Typography>
    //       <form className={classes.form} noValidate>
    //         <Box sx={{ display: 'flex', flexDirection: 'column' }}>
    //           <Typography>First Name</Typography>
    //           <TextField
    //             variant='outlined'
    //             margin='dense'
    //             required
    //             fullWidth
    //             id='email'
    //             label='First Name'
    //             name='firstName'
    //             autoComplete='firstName'
    //             autoFocus
    //           />
    //         </Box>
    //         <Box sx={{ display: 'flex', flexDirection: 'column' }}>
    //           <Typography>Last Name</Typography>
    //           <TextField
    //             variant='outlined'
    //             margin='dense'
    //             required
    //             fullWidth
    //             id='lastName'
    //             label='Last Name'
    //             name='lastName'
    //             autoComplete='lastName'
    //             autoFocus
    //           />
    //         </Box>
    //         <Box sx={{ display: 'flex', flexDirection: 'column' }}>
    //           <Typography>Email</Typography>
    //           <TextField
    //             variant='outlined'
    //             margin='dense'
    //             required
    //             fullWidth
    //             id='email'
    //             label='Email Address'
    //             name='email'
    //             autoComplete='email'
    //             autoFocus
    //           />
    //         </Box>
    //         <Box>
    //           <Typography>Password</Typography>
    //           <TextField
    //             variant='outlined'
    //             margin='dense'
    //             required
    //             fullWidth
    //             name='password'
    //             label='Password'
    //             type='password'
    //             id='password'
    //             autoComplete='current-password'
    //           />
    //         </Box>
    //         <Box sx={{ display: 'flex', justifyContent: 'center' }}>
    //           <Grid item xs={12} sm={6} md={4}>
    //             <Button
    //               style={{
    //                 backgroundColor: '#ffd200',
    //                 padding: '1rem 4rem',
    //                 margin: '1rem 0 -1rem 0',
    //               }}
    //               type='submit'
    //               variant='contained'
    //               className={classes.submit}
    //             >
    //               Create
    //             </Button>
    //           </Grid>
    //         </Box>
    //       </form>
    //     </div>
    //   </Container>
    // </Box>
  );
}
