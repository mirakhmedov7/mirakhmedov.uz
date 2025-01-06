'use client'
import React, { useRef, useEffect, useState } from 'react'

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' && window.innerWidth > 1024)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => setIsMobile(window.innerWidth > 1024)
      window.addEventListener('resize', handleResize)
      const handleMouseMove = (event: MouseEvent) => {
        setMousePosition({ x: event.clientX, y: event.clientY })
      }
      window.addEventListener('mousemove', handleMouseMove)

      if (ref.current) {
        ref.current.style.left = mousePosition.x - 300 + 'px'
        ref.current.style.top = mousePosition.y - 300 + 'px'
      }

      return () => {
        window.removeEventListener('mousemove', handleMouseMove)
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [mousePosition])

  if (isMobile) {
    return (
      <div
        style={{
          background:
            'radial-gradient(rgba(29, 78, 216, 0.15), transparent 70%)',
        }}
        className={`fixed w-[600px] h-[600px] rounded-2xl backdrop-blur-[100px] z-10 cursor top-0 left-0 transition`}
        ref={ref}
      ></div>
    )
  } else {
    return null
  }
}

export default Cursor
