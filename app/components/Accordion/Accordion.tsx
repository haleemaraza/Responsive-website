"use client"
import React, { useState } from 'react';
import { AccordionItem } from './AccordionItem';

interface AccordionProps {
  footerLinks?: {
    title: string;
    subTitles: { name: string; }[];
  }[];
  data?: {
    title: string;
    content: string;
  }[];
}

export const Accordion: React.FC<AccordionProps> = ({ footerLinks, data }) => {
  const [indexOpen, setIndexOpen] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setIndexOpen(index === indexOpen ? null : index);
  };

  return (
    <div className='w-full'>
      {footerLinks && footerLinks.map((item, index) => (
        <AccordionItem key={index} title={item.title} onClick={() => handleClick(index)} open={index === indexOpen}>
          {item.subTitles.map((subtitle, subIndex) => (
            <div key={subIndex}>
              <p className='font-semibold text-[16px] text-[#36485c] mt-[32px]'>
                {subtitle.name}
              </p>
            </div>
          ))}
        </AccordionItem>
      ))}
      {data && data.map((item, index) => (
        <AccordionItem key={index} title={item.title} onClick={() => handleClick(index)} open={index === indexOpen}>
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};
