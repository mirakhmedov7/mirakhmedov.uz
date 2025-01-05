'use client'
import React, { useRef, useEffect } from 'react'

const Cursor = ({ mouse }: { mouse: number[] }) => {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (ref.current) {
      ref.current.style.left = mouse[0] - 200 + 'px' 
      ref.current.style.top = mouse[1] - 200 + 'px'
    }
  }, [mouse])
  return (
    <div
      style={{
        background: 'radial-gradient(rgba(29, 78, 216, 0.15), transparent 70%)',
      }}
      className={`fixed w-[600px] h-[600px] rounded-2xl backdrop-blur-[100px] z-10 cursor top-0 left-0 transition`}
      ref={ref}
    ></div>
  )
}

export default Cursor
