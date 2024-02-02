import Footer from '@/Comps/Footer'
import Header from '@/Comps/Header'
import Image from 'next/image'
import Link from 'next/link'
import Acceuil from '@/app/pages/Home&personal/page'
import Product from '@/Comps/product/page'
import Cart from '@/Comps/cart/page'
import Errorpage from './pages/Errorpage/page'
import ProductPage from './pages/ecommerce/ProductPage/page'
import Chekout from '@/Comps/checkout/page'
import Success from './pages/Success'
import Failed from './pages/failed'

export default function Home() {
  return (
    <>
       <Acceuil />
    </>
  )
} 
