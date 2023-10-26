import Image from 'next/image'
import Hpage from '@/app/homepages/page'
import SBpage from '@/app/sbusinesspages/pages'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/footer/Footer'
import Process from './components/elements/form/process/page'
import SubnavBar from './components/Navbar/SubnavBar'



export default function Home() {
  return (
    <div>
      
      <SBpage/>
    </div>
  )
}
