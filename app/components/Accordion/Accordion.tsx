"use client"

import React, { useState } from 'react'
import { AccordionItem } from './AccordionItem';

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  data: AccordionItem[]
}

export const Accordion: React.FC<AccordionProps> = ({ data }) => {
  const [indexOpen, setIndexOpen] = useState(0)

  const handleClick = (index: number) => {
    setIndexOpen(index === indexOpen ? 9999 : index)
  }


  return (
    <div className='w-full'>
      {data && data.map((item, index) => (
        <>
          <AccordionItem key={index} title={item.title} onClick={() => handleClick(index)} open={index === indexOpen}>
            {item.content}

          </AccordionItem>
        </>
      ))}

    </div>
  )
}

