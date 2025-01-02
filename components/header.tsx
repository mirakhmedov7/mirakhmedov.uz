'use client'
import React, { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaTelegram } from 'react-icons/fa6'
import { Button } from '@/components/ui/button'
import { FiDownload } from 'react-icons/fi'
import { HiLocationMarker } from 'react-icons/hi'
import { navigationData } from '@/lib/data'

const Header = () => {
  useEffect(() => {
    const navLinks = document.querySelectorAll('.nav__link')
    const sectionEls = document.querySelectorAll('section')
    let currentSection = 'about'
    window.addEventListener('scroll', () => {
      sectionEls.forEach((sectionEl) => {
        if (window.scrollY >= (sectionEl.offsetTop - 300)) { 
          currentSection = sectionEl.id
        }

      })
      navLinks.forEach((navLink) => {
        if (navLink.href.includes(currentSection)) {
          document.querySelector('.active')?.classList.remove('active');
          navLink.classList.add('active')
        }
      })
    })
  }, [])

  return (
    <header className="sticky top-0 text-white pt-24 max-h-screen">
      <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-4xl">
        Asliddin Mirakhmedov
      </h1>
      <h3 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
        Front End Engineer
      </h3>
      <p className="mt-4 max-w-xs leading-normal text-slate-400">
        I build accessible, pixel-perfect digital experiences for the web.
      </p>
      <p className="mt-4 max-w-xs leading-normal text-slate-400 flex gap-1 items-center">
        <HiLocationMarker /> Tashkent, Uzbekistan
      </p>
      <ul className="text-bold text-slate-400 uppercase text-sm mt-5 ease-linear">
        {navigationData.map((item, i) => (
          <li key={i} className="hover:text-slate-200 transition-all text-bold">
            <a className={`group inline-flex items-center py-2 nav__link `} href={`#${item.href}`}>
              <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200"></span>
              <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                {item.title}
              </span>
            </a>
          </li>
        ))}
      </ul>
      <ul
        className="ml-1 mt-8 flex items-center gap-4"
        aria-label="Social media"
      >
        <a href="/cv.pdf" download>
          <Button variant="secondary" className='bg-white hover:bg-slate-200'>
            Download CV <FiDownload />
          </Button>
        </a>
        <li className="shrink-0 text-xs">
          <a
            className="block hover:text-slate-200"
            href="https://github.com/mirakhmedov7"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub (opens in a new tab)"
            title="GitHub"
          >
            <FaGithub className="text-2xl" />
          </a>
        </li>
        <li className="shrink-0 text-xs">
          <a
            className="block hover:text-slate-200"
            href="https://www.linkedin.com/in/mirakhmedov7/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub (opens in a new tab)"
            title="GitHub"
          >
            <FaLinkedin className="text-2xl" />
          </a>
        </li>
        <li className="shrink-0 text-xs">
          <a
            className="block hover:text-slate-200"
            href="https://t.me/mirakhmedov9"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub (opens in a new tab)"
            title="GitHub"
          >
            <FaTelegram className="text-2xl" />
          </a>
        </li>
      </ul>
    </header>
  )
}

export default Header
