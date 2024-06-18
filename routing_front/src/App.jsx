import React from 'react'; 

// mui
import {Box} from '@mui/material';

// custom components 
import AppBarComp from './components/AppBarRouting';
import RoutingPage from './pages/RoutingPage';

export default function App() {
  return (
    <Box sx = {{ flexGrow: 1 }}>
      <AppBarComp />
      <RoutingPage />
    </Box>
  );
}
