"use client"

import { Navbar } from '@/Comps/Header'
import React from 'react'



function Errorpage() {
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
                    <h1 className='text-6xl uppercase '> Site en maintenance</h1>
                    <h2 className='text-4xl '>Page not found</h2>
                    <p className='py-8' >le site est en construction pour toute information veuillez nous contacter ultérieurement. </p>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Errorpage