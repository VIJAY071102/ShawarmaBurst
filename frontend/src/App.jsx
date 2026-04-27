import React from 'react'
import Home from './pages/Home'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import About from './pages/About'
import AppRoutes from './routes/AppRoutes'
function App() {
  return (
    <BrowserRouter>
    <AppRoutes/>
    </BrowserRouter>
  )
}

export default App
