import {
  About,
  Header,
  Experience,
  Projects,
  Contact,
  Cursor,
} from '@/components/index'

export default function Home() {
  return (
    <>
      <Cursor />
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
    </>
  )
}
