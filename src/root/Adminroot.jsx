import React from 'react'
import AdminHeader from "../components/Header/AdminHeader"
import Footer from '../components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const Adminroot = () => {
  return (
     <>
    <AdminHeader/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Adminroot