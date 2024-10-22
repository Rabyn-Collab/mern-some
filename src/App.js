import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from "./pages/HomePage";
import RootLayout from "./components/RootLayout";
import AddForm from "./pages/AddForm";


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
          path: 'add-form',
          element: <AddForm />
        },




      ]
    },



  ]);

  return <RouterProvider router={router} />
}
export default App