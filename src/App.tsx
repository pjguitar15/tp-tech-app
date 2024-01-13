import Home from './pages/Home/Home'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import TPImage from './pages/TPImage/TPImage'
import Navbar from './components/Navbar/Navbar'
import KajeongMaengse from './pages/KajeongMaengse/KajeongMaengse'
import FamilyPledge from './pages/FamilyPledge/FamilyPledge'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

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
])

const store = configureStore({
  reducer: {
    // user: useReducer,
  },
})

const App = () => {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  )
}

export default App
