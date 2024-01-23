import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CircularIndeterminate() {
  return (
    <Box sx={{ display: 'flex', alignItems:"center", justifyContent:"center", padding:"5px", width:"100vw" }}>
      <CircularProgress />
    </Box>
  );
}