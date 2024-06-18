import React from 'react'; 

// mui 
import {Toolbar, Typography, AppBar, IconButton } from '@mui/material';

// react-icons 
import { CiMenuBurger } from "react-icons/ci";

const AppBarRouting = () => {
    return ( 
        <AppBar position="absolute" sx = {{ color: "#ffffff"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <CiMenuBurger />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Routing Maps 
          </Typography>
          <Typography component="div" sx = {{fontWeight: 500}} >
            CELSIA INTERNET
          </Typography>
        </Toolbar>
      </AppBar>
    )
}

export default AppBarRouting;