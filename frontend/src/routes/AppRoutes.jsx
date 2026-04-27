import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from "../layouts/MainLayout";
import Home from '../pages/Home'
import Gallery from '../pages/Gallery'
import Contact from '../pages/Contact'
import Menu from '../pages/Menu'
import About from '../pages/About'
import Franchise from '../pages/Franchise'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<Home />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
        <Route path="menu" element={<Menu />} />
        <Route path="about" element={<About />} />
        <Route path="franchise" element={<Franchise />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes
