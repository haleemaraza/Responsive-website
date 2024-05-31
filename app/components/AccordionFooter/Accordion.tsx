import React, { useState } from 'react'
import { AccordionItem } from './AccordionItem';

interface FooterLinks {
  title: string;
  subTitles: { name: string }[];
}

interface AccordionProps {
  footerLinks: FooterLinks[];
}

export const Accordion: React.FC<AccordionProps> = ({ footerLinks }) => {
  const [indexOpen, setIndexOpen] = useState<number>(9999);

  const handleClick = (index: number) => {
    setIndexOpen(index === indexOpen ? 9999 : index);
  };

  return (
    <div className="w-full">
      {footerLinks &&
        footerLinks.map((item, index) => (
          <>
            <AccordionItem
              key={index}
              title={item.title}
              onClick={() => handleClick(index)}
              open={index === indexOpen}
              subtitle={item.subTitles}
            />
          </>
        ))}
    </div>
  );
};