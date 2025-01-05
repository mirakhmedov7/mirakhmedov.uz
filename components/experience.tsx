import { experiencedData } from '@/lib/data'
import React from 'react'

const Experience = () => {
  return (
    <section
      id="experience"
      className="mt-20 flex flex-col relative before:w-[2px] before:h-full before:bg-slate-100 scroll-mt-24"
    >
      {experiencedData.map((item, i) => (
        <div key={i} className="flex justify-between relative w-full">
          <div className="max-w-12 w-full h-full flex flex-col items-center">
            <div className="max-w-12 max-h-12 rounded-full bg-slate-900 border-2 border-white flex items-center justify-center text-white text-2xl w-full h-full">{item.icon}</div>
            <span className='block w-[2px] h-full bg-slate-100'></span>
          </div>
          <span className="block w-10 h-[2px] rounded-sm bg-slate-100 my-5 mx-3"></span>
          <div className="flex flex-col w-full pb-5">
            <p className="text-secondary text-sm">{item.year}</p>
            <h2 className="text-white text-lg font-bold">{item.title}</h2>
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
