import { createTheme } from '@mui/material';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#fffff',
    },
    secondary: {
      main: '#212121',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
    },
    link: {
      underline: {
        hover: '#1565c0',
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#212121',
    },
    text: {
      primary: '#ffffff',
      secondary: '#bdbdbd',
    },
    link: {
      underline: {
        hover: '#64b5f6',
      },
    },
  },
});
