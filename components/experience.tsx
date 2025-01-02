import { experiencedData } from '@/lib/data'
import React from 'react'

const Experience = () => {
  return (
    <section
      id="experience"
      className="pt-16 flex flex-col gap-5 before:block relative before:w-[2px] before:h-full before:bg-slate-100 before:absolute before:top-16 before:left-[30px] before:rounded-sm overflow-hidden"
    >
      {experiencedData.map((item, i) => (
        <div key={i} className="flex justify-between gap-12 relative">
          <div className="max-w-12 max-h-12 rounded-full bg-slate-900 border-2 border-white flex items-center justify-center text-white text-2xl w-full h-full after:block after:w-7 after:h-[2px] after:rounded-sm after:bg-slate-100 after:absolute after:top-[30px] after:left-[70px]">
            {item.icon}
          </div>
          <div className="flex flex-col">
            <p className="text-secondary text-sm">{item.year}</p>
            <h1 className="text-white text-lg font-bold">{item.title}</h1>
            <p className="text-secondary text-sm">{item.description}</p>
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
        </div>
      ))}
    </section>
  )
}

export default Experience
