"use client"

import React from 'react'
import Image from 'next/image'
import Logo from 'public/Logo.png'
import { BsCart3 } from 'react-icons/bs'
import { FaPhoneAlt } from 'react-icons/fa'
import Link from 'next/link'
import ButtonNavbar from '@/Comps/elem/Button'
import {motion} from 'framer-motion'

import ButtonTap from '@/Comps/animation/buttonTap'

function Navbar () {
    return (
        <>
            <div className='navbar px-[53px] bg-black text-white '>
                <div className='navbar-start'> 
                    <Image 
                        src={Logo}
                        width={210}
                        height={74}
                        alt="Une belle image"
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
        </>
    )
}
function SubNavbar () {
    return (
        <>
    
                <div>
                    <div className='bg-black pb-4'>
                    <ul className='flex font-bold gap-x-[46px] px-[125px] py-[12px]'>
                        
                        <li className="text-white  inline-block relative cursor-pointer bg-black transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r before:from-blue-600 before:via-slate-400 before:to-white hover:before:w-full hover:before:opacity-100 "> <Link href="/">Home & Personal</Link></li>
                        
                        
                        <li className="text-white inline-block relative cursor-pointer bg-black transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r before:from-blue-600 before:via-slate-400 before:to-white hover:before:w-full hover:before:opacity-100 "><Link href="/pages/Smallbusiness">Small Business</Link></li>
                        
                        <li className="text-white  inline-block relative cursor-pointer bg-black transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r before:from-blue-600 before:via-slate-400 before:to-white hover:before:w-full hover:before:opacity-100 "><Link href="/pages/Health&SeniorSafety">Health & Senior Safety</Link></li>
                        <li className="text-white  inline-block relative cursor-pointer bg-black transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r before:from-blue-600 before:via-slate-400 before:to-white hover:before:w-full hover:before:opacity-100"><Link href="/pages/Commercial">Commercial</Link></li>
                    </ul>
                    </div>
                    <div className='flex justify-between px-[55px] '>
                    <ul className='flex font-bold gap-x-[84px] '>

                        <ButtonTap>
                            <Link href="">
                                <li className='cursor:pointer  hover:bg-black py-[8px] hover:text-white transition ease-in-out duration-200 w-[100px] flex items-center justify-center' activeclassName="bg-black text-white">Products</li>
                            </Link>
                        </ButtonTap>
                        <ButtonTap>
                            <Link href="">
                                <li className='cursor:pointer hover:bg-black py-[8px] hover:text-white transition ease-in-out duration-200 w-[100px] flex items-center justify-center' activeclassName="bg-black text-white">Compare</li>
                            </Link>
                        </ButtonTap>
                        <ButtonTap>
                            <Link href="">
                                <li className='cursor:pointer hover:bg-black py-[8px] hover:text-white transition ease-in-out duration-200 w-[100px] flex items-center justify-center'activeclassName="bg-black text-white" >Special</li>
                            </Link>
                        </ButtonTap>
                        <ButtonTap>
                            <Link href="">
                                <li className='cursor:pointer hover:bg-black py-[8px] hover:text-white transition ease-in-out duration-200 w-[100px] flex items-center justify-center' activeclassName="bg-black text-white">Ressources</li>
                            </Link>
                        </ButtonTap>
                        <ButtonTap>
                            <Link href="">
                                <li className='cursor:pointer hover:bg-black py-[8px] hover:text-white transition ease-in-out duration-200 w-[100px] flex items-center justify-center' activeclassName="bg-black text-white">Shop now</li>
                            </Link>
                        </ButtonTap>
                    </ul>
                   
                    <div className='flex gap-x-[50px]'>
                        <BsCart3 className='w-[35px] h-[32px]'/>
                        
                            <ButtonNavbar>
                                <p>get a free quote</p>
                            </ButtonNavbar>
                          
                            
                    </div>
                    </div>
                </div>
        
        </>
    )
}

function Header() {
  return (
    <>
        <Navbar/>
        <SubNavbar/>
    </>
  )
}

export default Header