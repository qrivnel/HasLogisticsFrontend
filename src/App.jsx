import { useState } from 'react'
import Navbar from './layouts/Navbar'
import { Routes, Route } from 'react-router-dom'

//Pages
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import GalleryPage from './pages/GalleryPage'
import CommunicationPage from './pages/CommunicationPage'
import StoragePage from './pages/StoragePage'
import OrderPage from './pages/OrderPage'
import LoginPage from './pages/LoginPage'
import AdminPage from './pages/AdminPage'

function App() {
  return (
    <>
      <Navbar />
      <div className='flex pt-16'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/gallery' element={<GalleryPage />} />
          <Route path='/communication' element={<CommunicationPage />} />
          <Route path='/storage' element={<StoragePage />} />
          <Route path='/order' element={<OrderPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/admin' element={<AdminPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
