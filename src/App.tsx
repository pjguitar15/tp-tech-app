import Home from './pages/Home/Home'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import TPImage from './pages/TPImage/TPImage'
import Navbar from './components/Navbar/Navbar'
import KajeongMaengse from './pages/KajeongMaengse/KajeongMaengse'
import FamilyPledge from './pages/FamilyPledge/FamilyPledge'

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
    ],
  },
  {
    path: 'admin',
    children: [],
  },
])

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
