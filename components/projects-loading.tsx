import React from 'react'
import { Skeleton } from './ui/skeleton'
import { SectionHeading } from './ui/section-heading'

const ProjectsLoading = () => {
  return (
    <section className="pt-16 text-grey" id="projects">
      <SectionHeading text="PROJECTS" />
      <div className="grid lg:grid-cols-1 md:grid-cols-2 640:gap-3 gap-10">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="flex justify-between w-full items-start gap-3 lg:hover:bg-slate-800/50 rounded-md lg:p-7 md:p-3 lg:transition lg:ease-in-out backdrop-blur-md sm:flex-row md:flex-col 950:flex-row lg:flex-row flex-col h-full lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]"
          >
            <div className="950:w-[60%] w-full">
              <Skeleton className="max-w-[200px] w-full h-5 bg-green-foreground" />
              <Skeleton className="950:max-w-[330px] w-full 950:h-16 md:h-10 sm:h-16 h-10 mt-2 bg-green-foreground" />
              <ul className="flex gap-1 mt-3 flex-wrap">
                {Array.from({ length: 4 }).map((_, i) => (
                  <Skeleton
                    key={i}
                    className="w-[56px] h-6 bg-green-foreground rounded-full"
                  />
                ))}
              </ul>
            </div>
            <Skeleton className="w-[192px] h-[133px] bg-green-foreground" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProjectsLoading
