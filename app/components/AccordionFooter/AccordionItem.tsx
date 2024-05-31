import React from 'react'
import Image from 'next/image'
import { IoIosArrowUp } from "react-icons/io"
import { IoIosArrowDown } from "react-icons/io"


interface Subtitle {
    name: string;
}

type Props = {
    key: number;
    title: string;
    open: boolean;
    onClick: () => void;
    subtitle: Subtitle[];
}

export const AccordionItem = ({ key, title, onClick, open = false, subtitle }: Props) => {
    return (
        <div className='w-full select-none'>
            <div className='py-4'>
                <div onClick={onClick} className='flex cursor-pointer items-center justify-between gap-[24px]'>
                    <span className='text-[16px] text-[#36485c]'>{title}</span>
                    <span className='p-1'>
                        {
                            open ? (<IoIosArrowUp className='md:h-[24px] md:w-[24px] w-[20px] h-[20px]' />) : (<IoIosArrowDown className='md:h-[24px] md:w-[24px] w-[20px] h-[20px]' />)
                        }
                    </span>
                </div>
                {open && (subtitle.map((data, index) => (
                    <p key={index} className='font-semibold text-[16px] text-[#36485c] mt-4'>
                        {data.name}
                    </p>
                )))}
            </div>
        </div>
    )
}

