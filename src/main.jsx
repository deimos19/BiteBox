import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './styles/general.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Userroot from './root/Userroot.jsx';
import Adminroot from './root/Adminroot.jsx';
import Homepage from './pages/Homepage/Homepage.jsx';
import Login from './pages/LoginPage/Login.jsx';
import CartPage from './pages/Cart/CartPage.jsx';
import Signup from './pages/SigupPage/Signup.jsx';
import AdminSignup from './pages/AdminSignup/AdminSignup.jsx';
import AdminLogin from './pages/AdminLogin/AdminLogin.jsx';
import AdminHomepage from './pages/Homepage/AdminHomepage.jsx';
import AdminOrders from './pages/AdminViewOrders/AdminOrders.jsx';
import SupportPage from './pages/SupportPage/SupportPage.jsx';
import AboutPage from './pages/AboutPage/AboutPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Userroot/>,
    children:[
      {
        path:"/",
        element:<Homepage/>
      },
      {
        path: "/support",
        element:<SupportPage/>
      },
      {
        path: "/about",
        element:<AboutPage/>
      },
      {
        path:"/Login",
        element:<Login/>
      },
      {
        path:"/cart",
        element:<CartPage/>
      },
      {
        path:"/Signup",
        element:<Signup/>
      },
      {
        path:"/AdminSignup",
        element:<AdminSignup/>
      },
      {
        path:"/AdminLogin",
        element:<AdminLogin/>
      }

    ]
  },
  {
    path: "/admin",
    element: <Adminroot/>,
    children: [
      {
        index: true,
        element:<AdminHomepage/>
      },
      {
        path:"Orders",
        element:<AdminOrders/>
      },
      {
        path:"support",
        element:<SupportPage/>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
