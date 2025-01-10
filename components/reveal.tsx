'use client'
import React, { useRef, JSX } from 'react'
import { motion } from 'framer-motion'

type Props = {
  children: JSX.Element
  width?: 'fit-content' | '100%'
  y?: number
  slidePosition?: 'y' | 'x'
  className?: string
}

const Reveal = ({ children, slidePosition = 'y', className = '' }: Props) => {
  const ref = useRef(null)
  return (
    <motion.div
      ref={ref}
      variants={
        slidePosition === 'y'
          ? {
              hidden: { opacity: 0, y: 60 },
              visible: { opacity: 1, y: 0 },
            }
          : {
              hidden: { opacity: 0, x: 60 },
              visible: { opacity: 1, x: 0 },
            }
      }
      initial="hidden"
      whileInView="visible"
      className={className}
      viewport={{
        once: true,
      }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {children}
    </motion.div>
  )
}

export default Reveal
