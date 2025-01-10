'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { JSX } from 'react'
import SplitType from 'split-type'

type propsType = {
  children: JSX.Element
  id?: string
}

const TextAnimation = ({ children }: propsType) => {
  // console.dir(children.props.id)
  useGSAP(() => {
    if (children) {
      new SplitType('#' + children.props.id, {
        types: 'lines',
        lineClass: 'split-parent',
      })
      const childSplit = new SplitType('.split-parent', {
        types: 'lines',
        lineClass: 'split-child',
      })

      gsap.from(childSplit.lines, {
        duration: 1.5,
        yPercent: 100,
        ease: 'power4.out',
        stagger: 0,
      })
    }
  })
  return children
}

export default TextAnimation
