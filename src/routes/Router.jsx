import { createBrowserRouter } from "react-router-dom";

import Home from '../components/Home';
import Login from '../components/Login';
import Register from '../components/Register';
import Root from "../layouts/Root";
import Error from "../components/Error";
import Estates from "../components/Estates";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/estates.json')
      },
      {
        path: '/estates/:id',
        element: <PrivateRoute><Estates></Estates></PrivateRoute>,
        loader: () => fetch('/estates.json')
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