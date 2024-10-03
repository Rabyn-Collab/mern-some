import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import RootLayout from "./components/RootLayout";
import CategoryItems from "./pages/CategoryItems";
import ItemDetail from "./pages/ItemDetail";


const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomePage />
        },
        {
          path: 'category-items/:category',
          element: <CategoryItems />
        },
        {
          path: 'detail/:id',
          element: <ItemDetail />
        },


        {
          path: 'about-page',
          element: <About />
        },
        {
          path: 'contact-page',
          element: <Contact />
        },
      ]
    },

    {
      path: '*',
      element: <NotFound />
    }

  ]);

  return <RouterProvider router={router} />
}
export default App