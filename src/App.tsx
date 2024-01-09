import Home from './pages/Home/Home'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import TPImage from './pages/TPImage/TPImage'
import Navbar from './components/Navbar/Navbar'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/true-parents',
    element: <TPImage />,
  },
  {
    path: 'admin',
    children: [],
  },
])

const App = () => {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  )
}

export default App
