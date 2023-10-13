import React from 'react'

function ButtonView({text}) {
  return (
    <button className='font-bold bg-[#4556F5] w-[168px] text-white p-[19px] flex items-center justify-center'>{text}</button>
  )
}

export default ButtonView