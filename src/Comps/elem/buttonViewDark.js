import React from 'react'
import ButtonTap from '@/Comps/animation/buttonTap'

function ButtonViewDark({text}) {
  return (
    <ButtonTap>
      <button className='font-bold bg-black text-white w-[168px] p-[19px]  flex items-center justify-center'>{text}</button>
    </ButtonTap>
    )

}

export default ButtonViewDark