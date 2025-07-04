import React from 'react'
import AdminHero from '../../components/Hero/AdminHero'
import AdminFoodManager from '../../components/AdminFoodManager/AdminFoodManager'
import AdminWeatherControl from '../../components/AdminWeatherControl/AdminWeatherControl'

const AdminHomepage = () => {
  return (
    <>
    <AdminHero/>
    <AdminWeatherControl/>
    <AdminFoodManager/>
    </>
  )
}

export default AdminHomepage