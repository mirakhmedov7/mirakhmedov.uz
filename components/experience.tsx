'use client'

import { experiencedData } from '@/lib/data'
import React from 'react'
import { SectionHeading } from './ui/section-heading'
import Reveal from './reveal'
import { motion } from 'framer-motion'
import { useScreen } from '@/hooks/index'

const Experience = () => {
  const isMobile = useScreen(640)
  return (
    <section
      id="experience"
      className="mt-20 flex flex-col relative before:w-[2px] before:h-full before:bg-slate-100 scroll-mt-24"
    >
      <SectionHeading text="EXPERIENCE" />
      {experiencedData.map((item, i) => (
        <div key={i} className="flex justify-between relative w-full">
          <div className="sm:flex flex-col items-center hidden">
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
              }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="min-w-12 min-h-12 rounded-full bg-slate-900 border-2 border-white flex items-center justify-center text-white text-2xl"
            >
              {item.icon}
            </motion.div>
            <motion.span
              variants={{
                hidden: { height: '0%' },
                visible: { height: '100%' },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
              }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="block w-[2px] bg-slate-100"
            ></motion.span>
          </div>
          <div className="sm:block hidden min-w-10 h-[2px] rounded-sm  my-5 mx-3">
            <motion.span
              variants={{
                hidden: { width: '0%' },
                visible: { width: '100%' },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
              }}
              transition={{ duration: 0.2, delay: 0.2 }}
              className="sm:block hidden h-[2px] rounded-sm bg-slate-100"
            ></motion.span>
          </div>
          <Reveal slidePosition={isMobile ? 'y' : 'x'}>
            <div className="flex flex-col w-full pb-10">
              <p className="text-secondary text-sm">{item.year}</p>
              <h2 tabIndex={0} className="text-white text-lg font-bold">
                {item.title}
              </h2>
              <p className="text-secondary text-md">{item.description}</p>
              <ul className="flex gap-1 mt-3 flex-wrap">
                {item.skills.map((name, i) => (
                  <li
                    key={i}
                    className="rounded-full py-1 px-3 text-green bg-green-foreground text-xs"
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      ))}
    </section>
  )
}

export default Experience
