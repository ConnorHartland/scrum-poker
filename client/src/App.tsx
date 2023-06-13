import './App.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import Navbar from 'components/navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from 'pages/landing-page'
function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* other routes can go here */}
        </Routes>
      </Router>
    </>
  )
}

export default App
