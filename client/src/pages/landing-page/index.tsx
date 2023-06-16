import { Button, Container, Paper, Typography } from '@mui/material'
import styled from '@emotion/styled'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
  const navigate = useNavigate()
  const handleCreateRoom = () => {
    // TODO: Add in service to create room
    navigate('/room/1234')
  }

  return (
    <Paper sx={{ marginTop: '3rem' }} elevation={3}>
      <LandingContainer>
        <Typography variant="h2">Welcome to Scrum Poker!</Typography>
        <Button
          onClick={handleCreateRoom}
          sx={{ marginTop: '3rem' }}
          variant="contained"
          size="large"
        >
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
