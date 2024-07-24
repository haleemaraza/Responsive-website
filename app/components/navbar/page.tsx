'use client'
import React, { useState } from 'react'
import Logo from 'public/pic/Logo.png'
import User from 'public/pic/User.svg'
import Image from 'next/image'
import Link from 'next/link'

import { IoCloseSharp } from "react-icons/io5"
import { AiOutlineMenu } from "react-icons/ai"

import { motion, AnimatePresence } from "framer-motion"

const links = [
    {
        name: "Features",
        link: "#"
    },
    {
        name: "Pricing",
        link: "#"
    },
    {
        name: "Enterprice",
        link: "#"
    },
    {
        name: "Careers",
        link: "#"
    },
]
const Page = () => {

    const [open, setOpen] = useState(false)

    const navContainer = {
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                x: { velocity: 100 },
                duration: 0.3
            }
        },
        hidden: {
            x: -250,
            opacity: 0,
            transition: {
                x: { velocity: 100 },
                duration: 0.3
            }
        }
    }
    const navList = {
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.07
            }
        },
        hidden: {
            opacity: 0,
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        }
    }

    const navItem = {
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                y: { stiffness: 1000, velocity: -100 }
            }
        },
        hidden: {
            y: 50,
            opacity: 0,
            transition: {
                y: { stiffness: 1000, velocity: -100 }
            }
        }
    }
    return (
        <section className='w-full flex justify-center'>
            <div className='lg:mx-20 mx-5 max-w-[1536px] w-full my-6 flex'>
                <div>
                    <Image src={Logo} alt='Logo' height={0} width={0} className='lg:w-[50px] lg:h[50px] w-[54px] h-[40px]' />
                </div>
                <div className='flex lg:justify-between w-full justify-end '>
                    <div className='my-auto ml-16 lg:block hidden'>
                        <ul className='flex gap-14'>
                            {
                                links.map((link, index) => (
                                    <li key={index}>
                                        <Link className='font-medium text-[16px] text-[#36485c]' href={link.link}>{link.name}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className='my-auto flex'>
                        <span className='mr-14 lg:block hidden '>
                            <Link href="#" className='font-medium text-[16px] text-[#36485c]'>Open an Account</Link>
                        </span>
                        <span className='flex cursor-pointer '>
                            <Image src={User} alt='user picture' className='lg:w-[40px] lg:h-[40px] h-[32px] w-[32px] mr-9' width={0} height={0} />
                            <span className='  mr-1  font-medium text-[#36485c] lg:block hidden'>Sign In</span>
                        </span>
                        <span className='lg:hidden block pt-1' onClick={() => setOpen(!open)}>
                            {open ? <IoCloseSharp className='w-[25px] h-[25px]' /> : <AiOutlineMenu className='w-[25px] h-[25px]' />}
                        </span>
                    </div>
                </div>
                <div className='absolute'>
                    <AnimatePresence>
                        {open && (
                            <motion.div className='navbar' initial="hidden" animate={open ? "visible" : "hidden"}
                                exit="hidden"
                                variants={navContainer}
                            >
                                <span className='pt-1 float-end mr-6' onClick={() => setOpen(!open)}>
                                    {open ? <IoCloseSharp className='w-[25px] h-[25px] text-white' /> : ""}
                                </span>
                                <motion.ul className='navList' initial="hidden" animate="visible" exit="hidden" variants={navList}>
                                    {
                                        links.map((link, index) => (
                                            <motion.li key={index} className='nav-item' variants={navItem}>
                                                <Link href={link.link}>{link.name}</Link>
                                            </motion.li>
                                        ))
                                    }

                                </motion.ul>

                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}

export default Page