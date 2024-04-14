import { createBrowserRouter } from "react-router-dom";

import Home from '../components/Home';
import Login from '../components/Login';
import Register from '../components/Register';
import Root from "../layouts/Root";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        }
      ]
    },
  ]);
  export default router;