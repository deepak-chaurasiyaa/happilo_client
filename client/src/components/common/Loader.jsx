import { Box, CircularProgress } from "@mui/material";

export default function CircularLoader() {
  return (
    <Box sx={{ display: 'flex', justifyContent:'center', alignItems:'center'}}>
      <CircularProgress />
    </Box>
  );
}