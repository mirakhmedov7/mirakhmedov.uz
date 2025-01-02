import { About, Header, Experience } from '@/components/'

export default function Home() {
  return (
    <div className="flex justify-between gap-4">
      <Header />
      <main className="flex flex-col w-1/2">
        <About />
        <Experience />
      </main>
    </div>
  )
}
