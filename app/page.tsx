'use client'
import {
  About,
  Header,
  Experience,
  Projects,
  Contact,
  Cursor,
} from '@/components/index'
import { useEffect, useState } from 'react'

export default function Home() {
  const [isMobile, setIsMobile] = useState(window.innerWidth > 1024)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth > 1024)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return (
    <div>
      {isMobile ? <Cursor /> : null}
      <div className="min-h-screen max-w-screen-xl px-6 z-0 mx-auto">
        <div className="flex lg:justify-between lg:gap-10 lg:flex-row flex-col">
          <Header />
          <main className="flex flex-col lg:w-1/2 relative z-20">
            <About />
            <Experience />
            <Projects />
            <Contact />
          </main>
        </div>
      </div>
    </div>
  )
}
