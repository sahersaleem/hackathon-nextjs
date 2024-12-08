import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import ShoppingCart from '@/components/ShoppingCart'
import React from 'react'






const page = () => {
  return (
    <div className="bg-white w-full h-screen text-black font-clash-display">
        <Navbar/>
        <ShoppingCart/>
        <Footer/>
    </div>
  )
}

export default page