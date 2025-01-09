'use client'
import React from 'react'
import { SectionHeading } from '@/components/ui/section-heading'

const About = () => {
  return (
    <section id="about" className="lg:pt-24">
      <SectionHeading text="ABOUT" />
      <p
        className="text-grey text-base"
        // variants={{
        //   hidden: { opacity: 0, y: 30 },
        //   visible: { opacity: 1, y: 0 },
        // }}
        // initial="hidden"
        // whileInView="visible"
        // transition={{ duration: 0.3, delay: 0.1 }}
      >
        I’m a developer passionate about crafting accessible, pixel-perfect user
        interfaces that blend thoughtful design with robust engineering. My
        favorite work lies at the intersection of design and development,
        creating experiences that not only look great but are meticulously built
        for performance and usability.
        <br />
        <br />
        Currently, I am dedicating my time and effort to preparing for the IELTS
        exam, focusing on improving my language skills across all sections,
        including listening, reading, writing, and speaking, to achieve a high
        score and meet my goals.
        <br />
        <br />
        In my spare time, I enjoy reading books on personal growth and success,
        spending time with friends, and playing table tennis to stay active. I
        also dedicate time to coding, creating user-friendly websites, and
        exploring new skills or ideas to keep learning and growing.
      </p>
    </section>
  )
}

export default About
