import React from 'react'
import Header from '../common/header'
import { Outlet } from 'react-router-dom'
import Footer from '../common/footer'

const UserLayout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default UserLayout