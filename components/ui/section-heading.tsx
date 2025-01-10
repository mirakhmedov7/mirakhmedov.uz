'use client'

import { useLenis } from 'lenis/react'
import React from 'react'

export const SectionHeading = ({ text }: { text: string }) => {
  const lenis = useLenis()

  return (
    <div
      className="sticky top-0 z-20 -mx-6 mb-3 w-screen bg-slate-900/75 px-6 py-4 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 cursor-pointer"
      onClick={() => {
        lenis?.scrollTo(`#${text.toLocaleLowerCase()}`, { lerp: 0.07 })
      }}
    >
      <h2 className="lg:hidden text-white text-base font-bold">{text}</h2>
    </div>
  )
}
