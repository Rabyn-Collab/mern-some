import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import RootLayout from "./components/RootLayout";
import SamplePage from "./pages/SamplePage";



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
          path: 'sample',
          element: <SamplePage />
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