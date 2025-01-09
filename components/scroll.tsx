import { ReactLenis } from 'lenis/react'

export default function Scroll({ children }: { children: React.ReactNode }) {
  return <ReactLenis root>{children}</ReactLenis>
}
