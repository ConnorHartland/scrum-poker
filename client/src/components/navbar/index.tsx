// Create a navbar for Scrum Poker with a link to the landing page

import React from 'react'
import { Link } from 'react-router-dom'

import { AppBar, Toolbar, Typography, Button } from '@mui/material'

export const Navbar = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Scrum Poker
          </Typography>
          <Button color="inherit" component={Link} to="/landing-page">
            Landing Page
          </Button>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar
