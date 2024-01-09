import Home from './pages/Home/Home'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import TrueParentsPhoto from './pages/TrueParentsPhoto/TrueParentsPhoto'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/true-parents',
    element: <TrueParentsPhoto />,
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
