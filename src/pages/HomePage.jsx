import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Stats from '../components/Stats'

const HomePage = () => {
  return (
    <section className=' bg-[#212124] min-h-screen'>
        <Navbar />
        <Hero />
        <Stats />
    </section>
  )
}

export default HomePage