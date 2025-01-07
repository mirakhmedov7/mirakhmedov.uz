'use client'
import React, { useEffect } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaTelegram } from 'react-icons/fa6'
import { Button } from '@/components/ui/button'
import { FiDownload } from 'react-icons/fi'
import { HiLocationMarker } from 'react-icons/hi'
import { navigationData } from '@/lib/data'

const Header = () => {
  useEffect(() => {
    const location = window.location
    const navLinks = document.querySelectorAll<HTMLAnchorElement>('.nav__link')
    const sectionEls = document.querySelectorAll('section')
    let currentSection = location.hash.split('#')[1]
    if (location.hash == '') {
      navLinks[0].classList.add('active')
    }
    navLinks.forEach((navLink) => {
      if (navLink.href.includes(currentSection)) {
        navLink.classList.add('active')
      }
    })

    window.addEventListener('scroll', () => {
      sectionEls.forEach((sectionEl) => {
        if (window.scrollY >= sectionEl.offsetTop - 300) {
          currentSection = sectionEl.id
        }
      })
      navLinks.forEach((navLink) => {
        if (navLink.href.includes(currentSection)) {
          document.querySelector('.active')?.classList.remove('active')
          navLink.classList.add('active')
        }
      })
    })
  }, [])

  return (
    <header className="lg:sticky top-0 text-white lg:py-24 py-16 max-h-screen flex flex-col justify-between z-10">
      <div>
        <h1 tabIndex={0} className="text-4xl md:text-5xl lg:text-[2.6rem] 1130:text-5xl font-bold tracking-tight text-white focus:outline-none focus:outline-2 focus:outline-purple focus:outline-offset-4">
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
      </div>
      <nav className="text-bold text-slate-400 uppercase text-sm mt-5 ease-linear hidden lg:block">
        <ul>
          {navigationData.map((item, i) => (
            <li
              key={i}
              className="hover:text-slate-200 transition-all text-bold"
            >
              <a
                className={`group inline-flex items-center py-2 nav__link focus:outline-none focus:outline-2 focus:outline-purple focus:outline-offset-4`}
                href={`#${item.href}`}
              >
                <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200"></span>
                <span className="nav-text text-sm font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                  {item.title}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <ul
        className="ml-1 mt-8 flex items-center gap-4 text-grey"
        aria-label="Social media"
      >
        <a href="/cv.pdf" download>
          <Button className="bg-green-foreground text-green hover:bg-green hover:text-[#144E5E]">
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
