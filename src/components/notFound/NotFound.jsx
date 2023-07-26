import { Button, Typography } from '@mui/material';
import React from 'react';

import { Link } from 'react-router-dom';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  title: {
    fontSize: '4rem',
    fontWeight: 'bold',
    marginBottom: '2rem',
    textAlign: 'center',
  },
  image: {
    width: '80%',
    maxWidth: '600px',
    marginBottom: '2rem',
  },
  button: {
    marginTop: '2rem',
    padding: '1rem 2rem',
    borderRadius: '2rem',
    fontWeight: 'bold',
    backgroundColor: '#3f51b5',
    color: 'white',
    '&:hover': {
      backgroundColor: '#2c387e',
    },
  },
};

const NotFound = () => {
  return (
    <div style={styles.container}>
      <Typography variant='h1' style={styles.title}>
        Oops! Page not found.
      </Typography>
      <img src='/error404page.gif' alt='not found' style={styles.image} />
      <Button variant='contained' component={Link} to='/' style={styles.button}>
        Go back to homepage
      </Button>
    </div>
  );
};

export default NotFound;
