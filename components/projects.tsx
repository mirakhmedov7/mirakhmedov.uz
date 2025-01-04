import { projectsData } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { HiOutlineExternalLink } from 'react-icons/hi'

const Projects = () => {
  return (
    <section className="pt-16 text-grey" id="projects">
      {projectsData.map((item, i) => (
        <Link key={i} href={item.link} target="_blank" className="group">
          <div className="flex justify-between w-full items-center mb-3 gap-3 hover:bg-slate-800/50 rounded-md p-7 drop-shadow-lg transition ease-in-out backdrop-blur-md">
            <div>
              <h1 className="text-slate-200 text-lg flex items-center gap-2 group-hover:text-green transition ease-in-out">
                {item.title} <HiOutlineExternalLink />
              </h1>
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
            <Image src={item.image} alt={item.title} width={200} height={50} />
          </div>
        </Link>
      ))}
    </section>
  )
}

export default Projects
