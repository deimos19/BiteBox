import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import Footer from './components/Footer/Footer.jsx';
import './styles/general.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import FoodItems from './components/FoodItems/FoodItems.jsx';
import Userroot from './root/Userroot.jsx';
import Adminroot from './root/Adminroot.jsx';
import AdminHeader from './components/Header/AdminHeader.jsx';
import Homepage from './pages/Homepage/Homepage.jsx';
import Login from './pages/LoginPage/Login.jsx';
import CartPage from './pages/Cart/CartPage.jsx';
import Signup from './pages/SigupPage/Signup.jsx';
import LoginUserRoot from './root/loginUserRoot';
import AdminSignup from './pages/AdminSignup/AdminSignup.jsx';
import AdminLogin from './pages/AdminLogin/AdminLogin.jsx';
import AdminHomepage from './pages/Homepage/AdminHomepage.jsx';
import AdminHero from './components/Hero/AdminHero.jsx';

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
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
