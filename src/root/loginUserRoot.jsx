import React from 'react'
import Footer from '../components/Footer/Footer'
import { Outlet } from 'react-router-dom'


const LoginUserRoot = () => {
  return (
    <>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default LoginUserRoot