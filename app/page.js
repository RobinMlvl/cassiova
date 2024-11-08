"use client"

import { Header76 } from '../components/heroSection.tsx'
import { Layout499 } from '../components/featureSection.tsx'
import { Layout121 } from '../components/howSection.tsx'
import { Layout38 } from '../components/whySection.tsx'
import { Layout135 } from '../components/numberSection.tsx'
import { Faq4 } from '../components/faqSection.tsx'
import { Navbar5 } from '../components/navSection.tsx'
import { Footer7 } from '../components/footer.tsx'
import { WaitlistSignup } from '../components/WaitlistSignup'
import { useState } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import components that use window/browser APIs
const Layout141 = dynamic(() => import('../components/exampleSection.tsx').then(mod => mod.Layout141), {
  ssr: false
})

const WheelOfFortune = dynamic(() => import('../components/wheel-of-fortune.tsx'), {
  ssr: false
})

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <Navbar5 isOpen={isOpen} setIsOpen={setIsOpen}/>
      <Header76 isOpen={isOpen} setIsOpen={setIsOpen}/>
      <Layout499/>
      <Layout121 isOpen={isOpen} setIsOpen={setIsOpen}/>
      <Layout141/>
      <Layout38/>
      <Layout135/>
      <Faq4/>
      <Footer7/>
      <WaitlistSignup isOpen={isOpen} setIsOpen={setIsOpen}/> 
    </div>
  )
}