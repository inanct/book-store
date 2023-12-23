import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserLayout from './components/layout/user-layout'
import Home from './components/home-page/Home'
import Product from './components/product-page/product'
import AboutPage from './components/about-page/about-page'
import Contact from './components/contact-page/contact'


const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<UserLayout/>}>
    <Route index element={<Home/>}/>
    <Route path='/product' element={<Product/>}/> 
    <Route path='/about' element={<AboutPage/>}/> 
    <Route path='/contact' element={<Contact/>}/>

      
    </Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App