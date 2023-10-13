import React from 'react'

import Ligne from '@/public/Composant1.png'


export default function Subtitle({title}) {
  return (
   <div className='flex text-white'> 
        <p className=' font-thin text-[24px]'>
            {title}
        </p>
       

   </div>
  )
}
