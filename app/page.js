import Image from 'next/image'
import Hpage from '@/app/homepages/page'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/footer/Footer'
import Process from './components/elements/form/process/page'
import SubnavBar from './components/Navbar/SubnavBar'



export default function Home() {
  return (
    <div>
      <Navbar/>
      <SubnavBar/>
      <Process />
      <Footer/>
    </div>
  )
}
