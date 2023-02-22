// import Image from 'next/image'
// import { Inter } from '@next/font/google'
"use client"
import HeroSection from './HeroSection'
import Features from './Features'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
   <HeroSection />
   <Features />
   {/* <h1>This is a practice Next.JS Project</h1>
   <b>This is the body of the practice website</b>
   <h2>This is second heading</h2> */}
   </>
  )
}
