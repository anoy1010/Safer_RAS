"use client"

import React, {useRef, useEffect, useState} from 'react'
import Carousel from 'better-react-carousel'
import Image from "next/image";
 
import ButtonView from '@/Comps/elem/ButtonView'
import Headtitle, { Headtitle1 } from '@/Comps/elem/Headtitle'
import Button from '@/Comps/elem/Button'
import CardSlideY from '@/Comps/animation/cardSlideY'
import CardSlidesY from '@/Comps/animation/cardSlidesY'
import HeadSlide from '@/Comps/animation/headSlide'
import CardScale from '@/Comps/animation/cardScale'

import Loader from '@/Comps/Loader'

function Smallbusiness() {

    const [loading, setLoading] = useState(true); 
  useEffect(() => {
    // Simulez un chargement asynchrone (par exemple, une requête à un serveur)
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Chargez pendant 3 secondes (à adapter selon vos besoins)
  }, []);

    const features = [
        {
          name: 'Push to deploy.',
          description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
          
        },
        {
          name: 'SSL certificates.',
          description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
          
        },
        {
          name: 'Database backups.',
          description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
         
        },
      ]

  return (
    <>{loading ? (
        <Loader />
      ) : (
        <div>
        <section className=''>
            <div className='flex flex-col h-[500px] w-full py-12 bg-black ' >
                
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className='text-center py-24 flex flex-col justify-center items-center '>
                        <h1 className='font-bold text-center text-[#4556F5] uppercase text-6xl 
                        '> La nouvelle ère de la sécurité. </h1>
                        <h3 className='font-thin text-lg text-white uppercase'>nous convenons pour toutes entreprises avec une sécurité faite sur mesure</h3>
                    </div>
                    <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0 places-content-center places-items-center container">
                        <CardSlideY>
                            <div className="flex -bottom-10 flex-col relative p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                                <h3 class="mb-4 text-2xl font-semibold">Starter</h3>
                                <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">Best option for personal use & for your next project.</p>
                                <div class="flex justify-center items-baseline my-8">
                                    <span class="mr-2 text-5xl font-extrabold">$29</span>
                                    <span class="text-gray-500 dark:text-gray-400">/month</span>
                                </div>
                                
                                <ul role="list" class="pb-8 space-y-4 text-left">
                                    <li class="flex items-center space-x-3">
                                        
                                        <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                        <span>Individual configuration</span>
                                    </li>
                                    <li class="flex items-center space-x-3">
                                        
                                        <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                        <span>No setup, or hidden fees</span>
                                    </li>
                                    <li class="flex items-center space-x-3">
                                        
                                        <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                        <span>Team size: <span class="font-semibold">1 developer</span></span>
                                    </li>
                                    <li class="flex items-center space-x-3">
                                        
                                        <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                        <span>Premium support: <span class="font-semibold">6 months</span></span>
                                    </li>
                                    <li class="flex items-center space-x-3">
                                        
                                        <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                        <span>Free updates: <span class="font-semibold">6 months</span></span>
                                    </li>
                                </ul>
                                <div className='flex justify-center items-center'>
                                    <ButtonView>Get started</ButtonView>
                                </div>
                            </div>
                        </CardSlideY>
                        <CardSlidesY>
                            <div className="flex flex-col relative p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                                <h3 class="mb-4 text-2xl font-semibold">Starter</h3>
                                <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">Best option for personal use & for your next project.</p>
                                <div class="flex justify-center items-baseline my-8">
                                    <span class="mr-2 text-5xl font-extrabold">$29</span>
                                    <span class="text-gray-500 dark:text-gray-400">/month</span>
                                </div>
                                
                                <ul role="list" class="pb-8 space-y-4 text-left">
                                    <li class="flex items-center space-x-3">
                                        
                                        <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                        <span>Individual configuration</span>
                                    </li>
                                    <li class="flex items-center space-x-3">
                                        
                                        <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                        <span>No setup, or hidden fees</span>
                                    </li>
                                    <li class="flex items-center space-x-3">
                                        
                                        <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                        <span>No setup, or hidden fees</span>
                                    </li>
                                    <li class="flex items-center space-x-3">
                                        
                                        <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                        <span>No setup, or hidden fees</span>
                                    </li>
                                    <li class="flex items-center space-x-3">
                                        
                                        <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                        <span>Team size: <span class="font-semibold">1 developer</span></span>
                                    </li>
                                    <li class="flex items-center space-x-3">
                                        
                                        <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                        <span>Premium support: <span class="font-semibold">6 months</span></span>
                                    </li>
                                    <li class="flex items-center space-x-3">
                                        
                                        <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                        <span>Free updates: <span class="font-semibold">6 months</span></span>
                                    </li>

                                </ul>
                                <div className='flex justify-center items-center'>
                                    <ButtonView>Get started</ButtonView>
                            </div>
                            </div>
                        </CardSlidesY>
                        <CardSlideY>
                            <div className="flex -bottom-10 flex-col relative p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                                <h3 class="mb-4 text-2xl font-semibold">Starter</h3>
                                <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">Best option for personal use & for your next project.</p>
                                <div class="flex justify-center items-baseline my-8">
                                    <span class="mr-2 text-5xl font-extrabold">$29</span>
                                    <span class="text-gray-500 dark:text-gray-400">/month</span>
                                </div>
                                
                                <ul role="list" class="pb-8 space-y-4 text-left">
                                    <li class="flex items-center space-x-3">
                                        
                                        <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                        <span>Individual configuration</span>
                                    </li>
                                    <li class="flex items-center space-x-3">
                                        
                                        <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                        <span>No setup, or hidden fees</span>
                                    </li>
                                    <li class="flex items-center space-x-3">
                                        
                                        <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                        <span>Team size: <span class="font-semibold">1 developer</span></span>
                                    </li>
                                    <li class="flex items-center space-x-3">
                                        
                                        <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                        <span>Premium support: <span class="font-semibold">6 months</span></span>
                                    </li>
                                    <li class="flex items-center space-x-3">
                                        
                                        <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                        <span>Free updates: <span class="font-semibold">6 months</span></span>
                                    </li>
                                </ul>
                                <div className='flex justify-center items-center'>
                                    <ButtonView>Get started</ButtonView>
                                </div>
                            </div>
                        </CardSlideY>
                    </div>
                </div>

                
                
            </div>
            
        </section>
        <section className='h-[525px] '>

        </section>
        <section className='bg-black flex flex-col items-center py-4'>
            <div className=''>
                <HeadSlide>
                    <Headtitle 
                    title="Quel sécurité pour votre magasin ?"
                    text="SafeR est une offre de sécurité complète et personnalisée qui répond aux besoins spécifiques des petits et moyens commerces. "/>
                </HeadSlide>
            </div>
            <div className='container flex gap-x-8 py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
                <CardScale>           
                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <Image
                        src="/camera-de-surveillance.png"
                        width={70}
                        height={70}
                        alt="camera-de-surveillance"
                    />
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Vidéosurveillance</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Permet de surveiller les locaux et les biens de l&apos;entreprise à distance et de dissuader les criminels.</p>
                    <a href="#" className="inline-flex items-center text-blue-600 hover:underline">
                        Plus d&apos;informations
                        <svg className="w-3 h-3 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
                        </svg>
                    </a>
                    </div>
                </CardScale> 
                <CardScale> 
                    <div className="max-w-sm p-6 bg-white border border-gray-200    rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <Image
                        src="/controle-dacces.png"
                        width={70}
                        height={70}
                        alt="controle-dacces"
                    />
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Contrôle d&apos;acces</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Permet de limiter l&apos;accès aux locaux de l&apos;entreprise aux personnes autorisées et de connaître qui a eu accès. </p>
                    <a href="#" class="inline-flex items-center text-blue-600 hover:underline">
                        Plus d&apos;informations
                        <svg class="w-3 h-3 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
                        </svg>
                    </a>
                    </div>
                </CardScale> 
                <CardScale> 
                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <Image
                        src="/urgence.png"
                        width={70}
                        height={70}
                        alt="urgence"
                    />
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Alarme intrusion</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">alerté en cas d&apos;intrusion dans les locaux de l&apos;entreprise et  Permet d&apos;alerter une brigade d&apos;urgence en cas d&apos;intrusion.</p>
                        <a href="#" class="inline-flex items-center text-blue-600 hover:underline">
                            Plus d&apos;informations
                            <svg class="w-3 h-3 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
                            </svg>
                        </a>
                    </div>
                </CardScale> 
                <CardScale> 
                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <Image
                        src="/incendie.png"
                        width={70}
                        height={70}
                        alt="incendie"
                    />
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Protection incendie</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-500 dark:text-gray-400"> Permet d&apos;être alerté en cas de départ de feu et Permet de lutter contre un incendie en cas de départ de feu.</p>
                        <a href="#" class="inline-flex items-center text-blue-600 hover:underline">
                           Plus d&apos;information
                            <svg class="w-3 h-3 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
                            </svg>
                        </a>
                    </div>
                </CardScale>

            </div>
            <div className='py-24'>
                <ButtonView><p>Plus d&apos;option</p></ButtonView>
            </div>
        </section>
        <section className='pb-32'> 
            <div class="overflow-hidden bg-white py-24 sm:py-32">
                <div class="mx-auto max-w-7xl px-6 lg:px-8">
                    <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div class="lg:pr-8 lg:pt-4">
                        <div class="lg:max-w-lg">
                        <h2 class="text-base font-semibold leading-7 text-indigo-600">Avantages</h2>
                        <p class="mt-2 text-3xl font-bold tracking-tight uppercase text-gray-900 sm:text-4xl">La sécurité électronique</p>
                        <p class="mt-6 text-lg leading-8 text-gray-600">La sécurité électronique est un élément essentiel pour la protection des petites entreprises en Côte d&apos;Ivoire. En choisissant les solutions les plus appropriées à vos besoins et en prenant les mesures nécessaires pour vous protéger , vous pouvez aussi contribuer à assurer la sécurité de votre entreprise et de ses biens.</p>
                        <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                            <div class="relative pl-9">
                            <dt class="inline font-semibold text-gray-900">
                                <svg class="absolute left-1 top-1 h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
                                </svg>
                                Protection contre les crimes et les incidents
                            </dt>
                            <dd class="inline">La sécurité électronique peut dissuader les criminels et limiter les dégâts en cas d&apos;incident.</dd>
                            </div>
                            <div class="relative pl-9">
                            <dt class="inline font-semibold text-gray-900">
                            <svg class="absolute left-1 top-1 h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clip-rule="evenodd" />
                                </svg>
                                Réduction des coûts d&apos;assurance:
                            </dt>
                            <dd class="inline">Les compagnies d&apos;assurance peuvent proposer des réductions aux entreprises qui ont mis en place des mesures de sécurité électroniques.</dd>
                            </div>
                            <div class="relative pl-9">
                            <dt class="inline font-semibold text-gray-900">
                                <svg class="absolute left-1 top-1 h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path d="M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z" />
                                <path fill-rule="evenodd" d="M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z" clip-rule="evenodd" />
                                </svg>
                                Renforcement de l&apos;image de l&apos;entreprise:
                            </dt>
                            <dd class="inline">La mise en place de solutions de sécurité électronique peut renforcer l&apos;image de l&apos;entreprise auprès des clients et des partenaires.</dd>
                            </div>
                        </dl>
                        </div>
                    </div>
                    <img src='/alexey-soucho-GHZnqk0VpPU-unsplash.jpg' className='h-full w-full bg-cover object-fit'/>
                    </div>
                </div>
            </div>
            <div className='py-8 '>
                <div>
                    <HeadSlide>
                        <Headtitle1 
                            title="Nous continuons toujours d'innover"
                            text=" La sécurité est un art chez SafeR"
                        />
                    </HeadSlide>
                </div>
                
                <div className='px-8 '>
                    <Carousel cols={2} rows={1} gap={20} loop >
                        <Carousel.Item >
                            <div className='flex justify-center items-center'>
                                <div href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="secu.jpg" alt=""/>
                                    <div class="flex flex-col justify-between p-4 leading-normal">
                                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item >
                            <div className='flex justify-center items-center'>
                                <div href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="secu.jpg" alt=""/>
                                    <div class="flex flex-col justify-between p-4 leading-normal">
                                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item >
                            <div className='flex justify-center items-center'>
                                <div href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="secu.jpg" alt=""/>
                                    <div class="flex flex-col justify-between p-4 leading-normal">
                                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item >
                            <div className='flex justify-center items-center'>
                                <div href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="secu.jpg" alt=""/>
                                    <div class="flex flex-col justify-between p-4 leading-normal">
                                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>


            </div>
        </section>
        </div>
        )}
    </>
    
  )
}
export default Smallbusiness