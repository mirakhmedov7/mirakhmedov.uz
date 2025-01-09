import Image from 'next/image'
import Link from 'next/link'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { SectionHeading } from '@/components/ui/section-heading'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
// import { Skeleton } from '@/components/ui/skeleton'

import { client } from '@/sanity/client'

type projectsDataType = {
  Title: string
  description: string
  technologies: string[]
  links: string
  image: SanityImageSource
}

const Projects = async () => {
  const response = await fetch('/api/projects', {
    next: { revalidate: 5000 },
  })
  const projectsData: projectsDataType[] = await response.json()
  const builder = imageUrlBuilder(client)
  const urlFor = (source: SanityImageSource) => {
    return builder.image(source)
  }
  return (
    <section className="pt-16 text-grey" id="projects">
      <SectionHeading text="PROJECTS" />
      <div className="grid lg:grid-cols-1 md:grid-cols-2 640:gap-3 gap-10">
        {projectsData.map((item, i) => (
          <Link key={i} href={item.links} target="_blank" className="group">
            <div className="flex justify-between w-full items-start gap-3 lg:hover:bg-slate-800/50 rounded-md lg:p-7 md:p-3 lg:transition lg:ease-in-out backdrop-blur-md sm:flex-row md:flex-col 950:flex-row lg:flex-row flex-col h-full lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]">
              <div>
                <h2 className="text-slate-200 text-lg flex items-center gap-2 lg:group-hover:text-green lg:group-focus:text-green">
                  {item.Title} <HiOutlineExternalLink />
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
                src={urlFor(item.image).quality(100).url()}
                alt={item.Title}
                width={192}
                height={133}
                quality={100}
                priority={true}
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Projects
