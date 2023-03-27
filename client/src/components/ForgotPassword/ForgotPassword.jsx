import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  TextField,
  Button,
  Box,
  Typography,
  Grid,
} from '@mui/material';
import Header from '../header/Header';
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

export default function ForgotPassword() {
  const classes = useStyles();

  return (
    <Box sx={{ padding: '10rem' }}>
      <Header />
      <Container component='main' maxWidth='xs'>
        <div className={classes.root}>
          <Typography component='h1' variant='h5'>
            Reset You Password
          </Typography>
          <Typography className='text-center' margin='0.5rem !important'>
            We will send you an email to reset your password.
          </Typography>
          <form className={classes.form} noValidate>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography>Email</Typography>
              <TextField
                variant='outlined'
                margin='dense'
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
                autoFocus
              />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Grid item xs={12} sm={6} md={4}>
                <Button
                  style={{
                    backgroundColor: '#ffd200',
                    padding: '1rem 4rem',
                    marginTop: '1rem',
                  }}
                  type='submit'
                  variant='contained'
                  className={classes.submit}
                >
                  Submit
                </Button>
              </Grid>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                padding: '1rem 4rem',
                marginTop: '1rem',
              }}
            >
              <Link to='/'>Cancel</Link>
            </Box>
          </form>
        </div>
      </Container>
    </Box>
  );
}
