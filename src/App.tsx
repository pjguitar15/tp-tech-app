import Home from './pages/Home/Home'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import TPImage from './pages/TPImage/TPImage'
import Navbar from './components/Navbar/Navbar'
import KajeongMaengse from './pages/KajeongMaengse/KajeongMaengse'
import FamilyPledge from './pages/FamilyPledge/FamilyPledge'
import AudioContextProvider from './contexts/AudioContext/AudioContextProvider'
import HolySongsPage from './pages/HolySongPlayer/HolySongsPage'
import HolySongContextProvider from './contexts/HolySongContext/HolySongContextProvider'

const NavbarWrapper = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavbarWrapper />,
    children: [
      {
        path: '/',
        element: <Home />,
        index: true,
      },
      {
        path: '/true-parents',
        element: <TPImage />,
      },
      {
        path: '/kajeong-maengse/:number',
        element: <KajeongMaengse />,
      },
      {
        path: '/family-pledge/:number',
        element: <FamilyPledge />,
      },
      {
        path: '/holy-songs',
        element: <HolySongsPage />,
      },
    ],
  },
])

const App = () => {
  return (
    <>
      <AudioContextProvider>
        <HolySongContextProvider>
          <RouterProvider router={router} />
        </HolySongContextProvider>
      </AudioContextProvider>
    </>
  )
}

export default App
