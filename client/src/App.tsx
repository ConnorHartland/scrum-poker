import { ThemeProvider } from '@emotion/react'
import styled from '@emotion/styled'

import { Modal } from '@mui/material'
import ModalRoot from 'components/modal/modal-root'
import Navbar from 'components/navbar'
import LandingPage from 'pages/landing-page'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { closeModal, openModal } from 'redux/features/modal/modalSlice'
import { UserState } from 'redux/features/user/userSlice'
import theme from 'theme'

function App() {
  const user = useSelector((state: { user: UserState }) => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log(user)
    if (!user.token) {
      dispatch(openModal({ modalType: 'CREATE_USER' }))
    } else {
      dispatch(closeModal())
    }
  }, [user])

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppContainer>
          <Navbar />
          <ModalRoot />
          <Wrapper>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              {/* other routes can go here */}
            </Routes>
          </Wrapper>
        </AppContainer>
      </Router>
    </ThemeProvider>
  )
}

export default App

const AppContainer = styled('div')({
  display: 'grid',
  gridTemplateRows: 'auto 1fr',
  height: '100vh',
  width: '100vw',
})

const Wrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  overflowY: 'auto', // add scrolling if the content overflows
  backgroundColor: '#111111',
})
