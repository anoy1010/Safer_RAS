import React from 'react'
import logoblack from 'public/logo_black.png'
import Image from 'next/image'
import {FaFacebookF, FaTiktok, FaInstagram, FaLinkedinIn} from 'react-icons/fa'

function Footer() {
  return (
    <footer className='bg-[#E6E7E8] px-[150px]'>
        <div className='flex justify-between  py-[50px]'>
            <div className=' flex flex-col'>
                <Image
                    src={logoblack}
                    width={250}
                    height={108}
                    alt='Safer'
                />
                <p className='text-xl font-semibold flex justify-end'>BE Safe, Be Smart</p>
            </div>
            <div className='text-sm font-normal w-[493px]'>
                <p>
                    la sécurité de vos biens et proches, est réinventée avec nos technologie de pointe pour une sécurité sans compromis et intelligente à votre service.
                    L'avenir de la sécurité est chez SAFER : Protégez votre monde avec intelligence.
                </p>
            </div>
        </div>
        <div className='flex justify-between'>
            <div>
                <h3 className='text-xl'>Suivez-nous :</h3>
                <ul className='flex py-4 gap-x-4'>
                    <li className='hover:bg-white transition ease-in-out duration-300 cursor-pointer rounded-xl p-2'><FaFacebookF color="black" fontSize="37" /></li>
                    <li className='hover:bg-white transition ease-in-out duration-300 cursor-pointer rounded-xl p-2'><FaTiktok color="black" fontSize="37" /></li>
                    <li className='hover:bg-white transition ease-in-out duration-300 cursor-pointer rounded-xl p-2'><FaLinkedinIn color="black" fontSize="37" /></li>
                    <li className='hover:bg-white transition ease-in-out duration-300 cursor-pointer rounded-xl p-2'><FaInstagram color="black" fontSize="37" /></li>
                </ul>
            </div>
            <div>
                <h3 className='text-xl font-bold pb-[20px]'>Catégories de produits</h3>
                <ul className='flex gap-y-[10px] flex-col '>
                    <li className='hover:text-[#939598] transition ease-in-out duration-300 cursor-pointer rounded-md py-2'>Home Security</li>
                    <li className='hover:text-[#939598] transition ease-in-out duration-300 cursor-pointer rounded-md py-2'>Smart Home Automation</li>
                    <li className='hover:text-[#939598] transition ease-in-out duration-300 cursor-pointer rounded-md py-2'>Security Cameras</li>
                    <li className='hover:text-[#939598] transition ease-in-out duration-300 cursor-pointer rounded-md py-2'>Business Security</li>
                </ul>
            </div>
            <div>
                <h3 className='text-xl font-bold pb-[20px]'>Nos offres</h3>
                <ul className='flex  gap-y-[10px] flex-col '>
                    <li className='hover:text-[#939598] transition ease-in-out duration-300 cursor-pointer rounded-md py-2'>Home Security</li>
                    <li className='hover:text-[#939598] transition ease-in-out duration-300 cursor-pointer rounded-md py-2'>Smart Home Automation</li>
                    <li className='hover:text-[#939598] transition ease-in-out duration-300 cursor-pointer rounded-md py-2'>Security Cameras</li>
                    <li className='hover:text-[#939598] transition ease-in-out duration-300 cursor-pointer rounded-md py-2'>Business Security</li>
                    <li className='hover:text-[#939598] transition ease-in-out duration-300 cursor-pointer rounded-md py-2'>Commercial</li>

                </ul>
            </div>
            <div>
                <h3 className='text-xl font-bold pb-[20px]'>Nos Secteurs d'activités</h3>
                <ul className='flex  gap-y-[10px] flex-col '>
                    <li className='hover:text-[#939598] transition ease-in-out duration-300 cursor-pointer rounded-md py-2'>Home Security</li>
                    <li className='hover:text-[#939598] transition ease-in-out duration-300 cursor-pointer rounded-md py-2'>Smart Home Automation</li>
                    <li className='hover:text-[#939598] transition ease-in-out duration-300 cursor-pointer rounded-md py-2'>Security Cameras</li>
                    <li className='hover:text-[#939598] transition ease-in-out duration-300 cursor-pointer rounded-md py-2'>Commercial</li>
                    <li className='hover:text-[#939598] transition ease-in-out duration-300 cursor-pointer rounded-md py-2'>Commercial</li>

                </ul>
            </div>
        </div>
        <p className='text-center text-md font-semibold pt-[125px] pb-8'>Copyright © 2023 SafeR. Tous Droits Réservés. Mentions légales. Produit par <span className='text-xl font-bold uppercase '>Kognitiv</span>.
        </p>
    </footer>
  )
}

export default Footer

