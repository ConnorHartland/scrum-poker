// Create a navbar for Scrum Poker with a link to the landing page

import React from 'react'

import { AppBar, Toolbar, Typography, Button } from '@mui/material'
import styled from '@emotion/styled'

export const Navbar = () => {
  return (
    <NavContainer position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Scrum Poker
        </Typography>
      </Toolbar>
    </NavContainer>
  )
}

export default Navbar

const NavContainer = styled(AppBar)({
  width: '100%',
})
