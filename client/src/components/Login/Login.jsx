import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  TextField,
  Button,
  Box,
  Toolbar,
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

export default function HappiloLogin() {
  const classes = useStyles();

  return (
    <Box sx={{ padding: '7rem' }}>
      <Header />
      <Container component='main' maxWidth='xs'>
        <div className={classes.root}>
          <Typography component='h1' variant='h5'>
            Happilo Login
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
            <Box>
              <Typography>Password</Typography>
              <TextField
                variant='outlined'
                margin='dense'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
              />
            </Box>
            <Link to='/reset-password'>
              <Typography className='text-center margin-top'>
                Forgot Your Password?
              </Typography>
            </Link>
            <div></div>
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
          </form>
          <Link to='/signup'>
            <Typography className='text-center margin-top'>
              Create Account
            </Typography>
          </Link>
        </div>
      </Container>
    </Box>
  );
}
