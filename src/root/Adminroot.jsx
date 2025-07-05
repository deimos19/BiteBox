import React, { useEffect, useState } from 'react';
import AdminHeader from "../components/Header/AdminHeader"
import Footer from '../components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const Adminroot = () => {
  const [theme, setTheme] = useState('light');
  
    useEffect(() => {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    }, [theme]);
  
    useEffect(() => {
      const saved = localStorage.getItem('theme');
      if (saved) setTheme(saved);
    }, []);
  
    const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  return (
     <>
    <AdminHeader toggleTheme={toggleTheme} currentTheme={theme}/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Adminroot