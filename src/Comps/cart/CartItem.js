
"use client"

import { useState } from "react";
import React from 'react'
import { MdOutlineDeleteForever } from "react-icons/md";

function CartItem() {
    const [amount, setAmount] = useState(1)

    const initialPrice = 25000;
    const [price, setPrice] = useState(initialPrice)
    const updateAmount = (newAmount) => {
        setAmount(newAmount);
        // Mettez à jour le prix en fonction de la nouvelle quantité
        setPrice(initialPrice * newAmount);
      };
  return (
    <div className='flex py-5 gap-3 md:gap-5 border-b cursor-pointer hover:bg-gray-200 rounded-xl p-2'>
        <div className='shrink-0 aspect-square w-[50px] md:w-[120px]'>
            <img src='' alt='image'/>
        </div>
            <div className='w-full flex flex-col '>
                <div className='flex flex-col md:flex-row justify-between'>
                    <div className='text-lg md:text-2xl font-semibold '>
                        Camera WIFI XIAOMI capteur 2K
                    </div>
                    <div className='text-sm md:text-md font-medium block md:hidden'>
                        Caméra
                    </div>
                    <div className='text-sm md:text-md font-bold mt-2'>
                         CFA {price}
                    </div>
                </div>
                <div className='text-md font-medium hidden md:block'>
                    Caméra
                </div>
                <div  className='flex items-center justify-between mt-4'>
                    <div className='flex items-center gap-2 md:gap-10 text-sm md:tex-md'>

                        <div className="flex items-center gap-1">
                            <button type="" className=' ring-black ring-1 hover:ring-2 rounded-full py-1 px-1 sm:px-4 text-white bg-black text-2xl' onClick={() => updateAmount(amount - 1)}> - </button>
                                    <span className='py-4 px-6 sm:px-2 rounded-lg'>{amount}</span>
                            <button type="" className=' ring-black ring-1 hover:ring-2 rounded-full py-1 px-1 sm:px-4 text-white bg-black text-2xl' onClick={() => updateAmount(amount + 1)}> + </button>
                        </div>
                    </div>
                    <MdOutlineDeleteForever className=" cursor-pointer hover:text-gray-400 text-[16px] md:text-[20px]"/>
                </div>
                
            </div>
        
    </div>
  )
}

export default CartItem