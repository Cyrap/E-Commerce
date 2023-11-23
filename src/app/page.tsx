'use client'
import Navbar from '../components/navbar/Navbar'
import NewsFeed from './Intro/page'
import Footer from '@/components/Footer'
import SwiperComponent from '@/components/Swiper'
import {NextUIProvider} from '@nextui-org/react'
export default function Home() {
  return(<>
   <NextUIProvider>
    <main className='dark text-foreground bg-background'>
    <Navbar/>
    <NewsFeed/>
    <SwiperComponent/>
    <Footer/>
    </main>
   </NextUIProvider> 
  </>
  )
}


