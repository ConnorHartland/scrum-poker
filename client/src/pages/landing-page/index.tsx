import { Button, Container, Paper, Typography } from '@mui/material'
import styled from '@emotion/styled'

const LandingPage = () => {
  return (
    <Paper sx={{ marginTop: '3rem' }} elevation={3}>
      <LandingContainer>
        <Typography variant="h2">Welcome to Scrum Poker!</Typography>
        <Button sx={{ marginTop: '3rem' }} variant="contained" size="large">
          Create A Room
        </Button>
      </LandingContainer>
    </Paper>
  )
}

export default LandingPage

const LandingContainer = styled(Container)({
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  padding: '2rem',
})
