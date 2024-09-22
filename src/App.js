import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";


const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: 'about-page',
      element: <About />
    },
    {
      path: 'contact-page',
      element: <Contact />
    },
    {
      path: '*',
      element: <NotFound />
    }

  ]);




  return <RouterProvider router={router} />
}
export default App