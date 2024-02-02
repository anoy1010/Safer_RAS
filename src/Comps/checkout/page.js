import React from 'react'

import { MdOutlineCancel } from "react-icons/md";
import { IoCard } from "react-icons/io5";
import { FaMobileAlt } from "react-icons/fa";
import RelatedProduct from '../RelatedProduct';

export default async function Chekout() {
  
  return (
    <>
        <div className='py-12'>
            <div className='px-24 flex flex-row gap-8'>
                <div className='w-2/3'>
                  <h2 className='text-3xl font-semibold capitalize'>Shopping cart</h2>
                  <div className='py-8'>
                    <table className="w-full border-collapse">
                      <thead>
                        <tr>
                          <th className="border-b border-gray-300 bg-gray-200 py-2 text-left text-gray-800">Product</th>
                          <th className="border-b border-gray-300 bg-gray-200 py-2 text-center text-gray-800">Quantity</th>
                          <th className="border-b border-gray-300 bg-gray-200 py-2 text-center text-gray-800">Subtotal</th>
                          <th className="border-b border-gray-300 bg-gray-200 py-2 text-center text-gray-800">Action</th>

                        </tr>
                      </thead>
                      <tbody>
                        
                          <tr>
                          <td className="border-b w-48 border-gray-300 py-2">{order.name}</td>
                          <td className="border-b w-24  px-8 text-center border-gray-300 py-2">{order.qty}</td>
                          <td className="border-b w-24  px-8 text-center border-gray-300 py-2">{order.price}</td>
                          <td className="border-b w-24  px-8 text-center border-gray-300 py-2"><MdOutlineCancel className='text-gray-500 w-5 h-5 me-2'/></td>

                        </tr>
                        

                        
                        
                      </tbody>
                      <tfoot>
                        <tr>
                          <td colSpan="2" className="border-b border-gray-300 py-2">Subtotal</td>
                          <td className="border-b border-gray-300 py-2 total text-center">$562.27</td>
                        </tr>
                        <tr>
                          <td colSpan="2" className="border-b border-gray-300 py-2">Shipping</td>
                          <td className="border-b border-gray-300 py-2 text-center">$20.00</td>
                        </tr>
                        <tr>
                          <td colSpan="2" className="border-b border-gray-300 py-2">Total</td>
                          <td className="py-2 total text-center">$582.27</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
                <div className='w-1/3 px-8'>
                  <h2 className='text-3xl font-semibold capitalize'>Info de paiement</h2>
                  <div className='py-8'>
                    <h4 className='text-gray-400 text-lg'>Methode de paiement</h4>
                    <div className='flex flex-row py-2'>
                      <input type="radio" name="radio-1" className="radio mr-4" checked />
                      <IoCard />
                      <label for="" className='ml-2'>Carte de crédit</label>
                    </div>  
                    <div className='flex flex-row py-2'>
                    <input type="radio" name="radio-1" className="radio mr-4" />
                      <FaMobileAlt />
                      <label for="" className='ml-2'>Mobile Money </label>
                    </div>  
                  </div>

                  <button type="" className='bg-indigo-600 hover:bg-indigo-800 px-12 py-2.5 text-white uppercase transition ease-in-out duration-200'>
                    finaliser la commande
                  </button>
                </div>
            </div>
        </div>
        <RelatedProduct/>
    </>
  )
}

