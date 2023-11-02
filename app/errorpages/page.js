
"use client"
import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Image from 'next/image'
import Footer from '../components/footer/Footer'

function errorpage() {
  return (
    <div className='h-screen'>
        <Navbar/>
        <section className='bg-black'>
            <div className='flex items-center justify-center'>
                <img
                    src='error_eyes.gif'
                    alt="background"
                />
                <div className=' text-center flex flex-col absolute text-white font-bold'>
                    <h1 className='text-6xl '> Error 404</h1>
                    <h2 className='text-4xl '>Page not found</h2>
                    <p className='py-8' >le site est en construction pour toute information veuillez nous contacter ultérieurement. </p>
                </div>
            </div>
        </section>
        <Footer/>
    </div>
  )
}

export default errorpage