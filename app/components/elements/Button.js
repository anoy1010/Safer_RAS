import React from 'react'

export default function Button({text}) {
  return (
    <button className='font-bold bg-[#4556F5] text-white hover:bg-[#8A95FF]  transition ease-in-out duration-200 px-[28px] flex items-center justify-center'>{text}</button>
  )
}

