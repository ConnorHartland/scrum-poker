import styled from '@emotion/styled'
import { Button, Container, Paper, Typography } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { UserState } from 'redux/features/user/userSlice'
import { setUserName } from 'redux/features/user/userSlice'
import { openModal } from 'redux/features/modal/modalSlice'

const LandingPage = () => {
  const user = useSelector((state: { user: UserState }) => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!user.name) {
      dispatch(openModal({ modalType: 'CREATE_USER' }))
    }
  }, [user, dispatch])

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
