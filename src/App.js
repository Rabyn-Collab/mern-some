import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from "./pages/HomePage";
import RootLayout from "./components/RootLayout";


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




      ]
    },



  ]);

  return <RouterProvider router={router} />
}
export default App