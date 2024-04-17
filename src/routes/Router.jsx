import { createBrowserRouter } from "react-router-dom";

import Home from '../components/Home';
import Login from '../components/Login';
import Register from '../components/Register';
import Root from "../layouts/Root";
import Error from "../components/Error";
import Estates from "../components/Estates";
import PrivateRoute from "./PrivateRoute";
import Profile from "../components/Profile";
import FeedbackForm from "../components/FeedbackForm";
import UpdateProfile from "../components/UpdateProfile";

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
      },
      {
        path: '/profile',
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path: '/feedbackform',
        element: <PrivateRoute><FeedbackForm></FeedbackForm></PrivateRoute>
      },
      {
        path: '/updateProfile',
        element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
      }
    ]
  },
]);
export default router;