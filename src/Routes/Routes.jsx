import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home/Home";
import Services from "../Components/Pages/Service/Services";
import Login from "../Components/Pages/Login";
import SignUp from "../Components/Pages/SignUp";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Components/Dashboard/Cart";
import AllUsers from "../Components/Dashboard/AllUsers";
import AdminRoute from "./AdminRoute";
import AddItems from "../Components/Dashboard/AddItems";
import Payment from "../Components/Dashboard/Payment/Payment";
import PaymentHistory from "../Components/Dashboard/PaymentHistory";
import AdminHome from "../Components/Dashboard/AdminHome";
import Contact from "../Components/Pages/Contact";
import Review from "../Components/Dashboard/Review";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        }, 
        {
          path: 'services', 
          element: <Services></Services>
        },
    
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
        },
        {
          path: 'contact',
          element: <Contact></Contact>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        // normal user routes
        {
          path: 'cart',
          element: <Cart></Cart>
        },
        {
          path: 'review',
          element: <Review></Review>
        },
        {
          path: 'payment',
          element: <Payment></Payment>
        },
        {
          path: 'payhistory',
          element: <PaymentHistory></PaymentHistory>
        },

        // admin only routes
        {
          path: 'addItems',
          element: <AdminRoute><AddItems></AddItems></AdminRoute>
        },
        {
          path: 'adminHome',
          element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
        },
     
        {
          path: 'users',
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        }

      ]
    }
  ]);