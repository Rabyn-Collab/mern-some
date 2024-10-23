import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from "./pages/HomePage";
import RootLayout from "./components/RootLayout";
import AddForm from "./pages/AddForm";
import EditForm from "./pages/EditForm";


const App = () => {

  // const numbers = [{ id: 1, name: 'ram' }, { id: 2, name: 'shyam' }];

  // console.log(numbers.map((num) => num.id === 1 ? { name: 'sita' } : num));

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
        {
          path: 'edit-form/:id',
          element: <EditForm />
        },




      ]
    },



  ]);

  return <RouterProvider router={router} />
}
export default App