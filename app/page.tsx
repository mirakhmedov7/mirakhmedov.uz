'use client'
import {
  About,
  Header,
  Experience,
  Projects,
  Contact,
  Cursor,
} from '@/components/index'
import { MouseEvent, useState } from 'react'

export default function Home() {
  const [mouse, setMouse] = useState([0, 0])
  const mouseMove = (e: MouseEvent) => {
    setMouse([e.clientX, e.clientY])
  }
  return (
    <div onMouseMove={mouseMove}>
      <Cursor mouse={mouse} />
      <div className="min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0 scroll-smooth z-0 antialiased mx-auto">
        <div className="flex justify-between gap-4">
          <Header />
          <main className="flex flex-col w-1/2 relative z-20">
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
