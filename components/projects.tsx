'use client'
import { projectsData } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { HiOutlineExternalLink } from 'react-icons/hi'

const Projects = () => {
  return (
    <section className="pt-16 text-grey" id="projects">
      <h2 className="lg:hidden text-white sm:text-2xl text-xl font-bold mb-5">PROJECTS</h2>
      <div className='grid lg:grid-cols-1 md:grid-cols-2 gap-10'>
        {projectsData.map((item, i) => (
          <Link key={i} href={item.link} target="_blank" className="group">
            <div className="flex justify-between w-full items-start gap-3 lg:hover:bg-slate-800/50 rounded-md lg:p-7 md:p-3 lg:transition lg:ease-in-out backdrop-blur-md sm:flex-row md:flex-col 950:flex-row lg:flex-row flex-col h-full lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]">
              <div>
                <h2 className="text-slate-200 text-lg flex items-center gap-2 group-hover:text-green transition ease-in-out">
                  {item.title} <HiOutlineExternalLink />
                </h2>
                <p className="text-sm">{item.description}</p>

                <ul className="flex gap-1 mt-3 flex-wrap">
                  {item.technologies.map((tech, i) => (
                    <li
                      key={i}
                      className="rounded-full py-1 px-3 text-green bg-green-foreground text-xs"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
              <Image
                className="w-auto h-auto"
                src={item.image}
                alt={item.title}
                width={150}
                height={50}
                quality={70}
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Projects
