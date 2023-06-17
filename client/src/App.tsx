import { ThemeProvider } from '@emotion/react'
import styled from '@emotion/styled'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import Navbar from 'components/navbar'
import LandingPage from 'pages/landing-page'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import theme from 'theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppContainer>
          <Navbar />
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
