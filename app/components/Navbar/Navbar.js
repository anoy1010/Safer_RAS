
import React from 'react'
import Image from 'next/image'
import Logo from '../../../public/Logo.png'
import { FaPhoneAlt } from 'react-icons/fa'

const Navbar = () => {
    
    
  return (
    <div className='navbar px-[53px] bg-black text-white '>
        <div className='navbar-start'> 
            <Image 
                src={Logo}
                width={210}
                height={74}
            />
        </div>
        
        <div className='navbar-end hidden md:flex gap-16 '>
            <div className='flex gap-2 items-center'> 
                <FaPhoneAlt/> 
                <div className=''>
                    <h2>+ 225 0707 0707 07</h2>
                    <h4 className='font-thin '>call center</h4>
                </div>
            </div>
            <div className='flex gap-2 items-center'> 
                <FaPhoneAlt/> 
                <div className=''>
                    <h2>+ 225 0707 0707 07</h2>
                    <h4 className='font-thin '>call center</h4>
                </div>
            </div>
            <div className='flex gap-2 items-center'> 
                <FaPhoneAlt/> 
                <div className=''>
                    <h2>+ 225 0707 0707 07</h2>
                    <h4 className='font-thin '>call center</h4>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Navbar