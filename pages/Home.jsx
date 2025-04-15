import React from 'react';
import Navbar from '../components/home/Navbar';
import Hero from '../components/home/Hero';
import Footer from '../components/home/Footer';
const Home = () => {
  return (
    <>
    <div className='h-screen w-screen bg-gray-800'>
    <Navbar/>
    <Hero/>
    <Footer/>
    </div>
    
    </>
  )
}

export default Home