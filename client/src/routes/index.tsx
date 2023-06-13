import LandingPage from 'pages/landing-page'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
])
