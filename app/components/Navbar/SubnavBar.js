import React from 'react'
import { BsCart3 } from 'react-icons/bs'
import ButtonNavbar from '../elements/Button'
 

const SubnavBar = () => {
  return (
    <div>
      <div className='bg-black text-white'>
        <ul className='flex font-bold gap-x-[46px] px-[125px] py-[12px]'>
          <li>Home & Personal</li>
          <li>Small Business</li>
          <li>Health & Senior Safety</li>
          <li>Commercial</li>
        </ul>
      </div>
      <div className='flex justify-between px-[55px] '>
        <ul className='flex font-bold gap-x-[84px] '>
          
          <li className='cursor:pointer  hover:bg-black py-[8px] hover:text-white transition ease-in-out duration-200 w-[100px] flex items-center justify-center' activeclassName="bg-black text-white">Products</li>
          <li className='cursor:pointer hover:bg-black py-[8px] hover:text-white transition ease-in-out duration-200 w-[100px] flex items-center justify-center' activeclassName="bg-black text-white">Compare</li>
          <li className='cursor:pointer hover:bg-black py-[8px] hover:text-white transition ease-in-out duration-200 w-[100px] flex items-center justify-center'activeclassName="bg-black text-white" >Special</li>
          <li className='cursor:pointer hover:bg-black py-[8px] hover:text-white transition ease-in-out duration-200 w-[100px] flex items-center justify-center' activeclassName="bg-black text-white">Ressources</li>
          <li className='cursor:pointer hover:bg-black py-[8px] hover:text-white transition ease-in-out duration-200 w-[100px] flex items-center justify-center' activeclassName="bg-black text-white">Shop now</li>
        </ul>
        <div className='flex gap-x-[50px]'>
          <BsCart3 className='w-[35px] h-[32px]'/>
          <ButtonNavbar text="get a free quote" />
        </div>
      </div>
    </div>
  )
}

export default SubnavBar