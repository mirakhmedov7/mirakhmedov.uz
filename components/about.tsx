'use client'
import React from 'react'
import { SectionHeading } from '@/components/ui/section-heading'
import { Reveal } from '@/components/index'

const About = () => {
  return (
    <section id="about" className="lg:pt-24">
      <SectionHeading text="ABOUT" />
      <Reveal>
        <p className="text-grey text-base md:text-lg" id="about-text">
          I&apos;m a <strong>Frontend Developer</strong> with more than 3 years
          of experience. With a passion for development, I take projects from
          ideation to launch, ensuring a seamless journey that leaves a lasting
          positive impact on the digital landscape and your business.
        </p>
      </Reveal>
      <br />
      <Reveal>
        <p className="text-grey text-base md:text-lg" id="about-text">
          Creating great web experiences is my primary focus. I ensure each
          project leaves users with a feel-good sensation through meticulous
          attention to detail and user-centric design principles.
        </p>
      </Reveal>
      <br />
      <Reveal>
        <p className="text-grey text-base md:text-lg" id="about-text">
          In my spare time, I enjoy reading books on personal growth and
          success, spending time with friends, and playing table tennis to stay
          active. I also dedicate time to coding, creating user-friendly
          websites, and exploring new skills or ideas to keep learning and
          growing.
        </p>
      </Reveal>
    </section>
  )
}

export default About
