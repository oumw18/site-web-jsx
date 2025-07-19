import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
  return (
    <div>
      <Header/>
      <main className="mx-2 my-9 ">
       <Outlet/> 
      </main>
      <Footer/>
    </div>
  )
}
