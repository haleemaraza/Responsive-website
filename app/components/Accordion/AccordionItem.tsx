import React from 'react'
import { FaPlus } from "react-icons/fa6"
import { FiMinus } from "react-icons/fi"
import Image from 'next/image'


type Props = {
    key: number;
    title: string;
    children: React.ReactNode;
    open: boolean;
    onClick: () => void;
}
export const AccordionItem = ({ key, title, children, onClick, open = false }: Props) => {
    return (
        <div className='w-full select-none mb-4 bg-[#e3f1ff] rounded-lg'>
            <div className='md:p-6 p-4'>
                <div onClick={onClick} className='flex cursor-pointer items-center justify-between gap-[24px]'>
                    <span className='font-semibold md:text-[18px] text-[16px] text-[#172026]'>{title}</span>
                    <span className='p-1'>
                        {
                            open ? (<FiMinus className='md:h-[24px] md:w-[24px] w-[20px] h-[20px]' />) : (<FaPlus className='md:h-[24px] md:w-[24px] w-[20px] h-[20px]' />)
                        }
                    </span>
                </div>
                {open && (<p className='md:text-[18px] text-[16px] text-[#36485c]'>{children}</p>)}
            </div>
        </div>
    )
}

