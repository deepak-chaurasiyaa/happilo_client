import { Box, CircularProgress, Typography } from '@mui/material';

export default function CircularLoader() {
  return (
    <Box
      sx={{ display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center' }}
    >
      <CircularProgress />
     
      <Typography variant='h5'>Loading...</Typography>
    </Box>
  );
}
