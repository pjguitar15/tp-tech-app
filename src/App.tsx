import "./index.css"
import {
  Link,
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
    )
  )
  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
      <RouterProvider router={router} />
    </>
  )
}

const Root = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <div>
        <Outlet />
      </div>
    </>
  )
}

export default App
