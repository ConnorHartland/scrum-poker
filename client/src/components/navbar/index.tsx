import { AppBar, Toolbar, Typography } from '@mui/material'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <NavContainer position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Scrum Poker
        </Typography>
        <Links>
          <LinkButton to={'/'}>
            <Typography variant="h6">Home</Typography>
          </LinkButton>
        </Links>
      </Toolbar>
    </NavContainer>
  )
}

export default Navbar

const NavContainer = styled(AppBar)({
  width: '100%',
})

const Links = styled('div')({
  display: 'flex',
  justifyContent: 'space-around',
})

const LinkButton = styled(Link)({
  display: 'flex',
})
