import React from 'react'
import Facebook from "/public/pic/App Logo Inspiraton 42.png"
import x from "/public/pic/x.png"
import Image from 'next/image'
import Logo from '/public/pic/Logo.png'
import { Accordion } from '../Accordion/Accordion'


const footerLinks = [
  {
    title: "Features",
    subTitles: [
      {
        name: "Growth"
      },
      {
        name: "Sales"
      },
      {
        name: "Chat"
      },
    ]
  },
  {
    title: "Pricing",
    subTitles: [
      {
        name: "Free Trial"
      },
      {
        name: "Standard"
      },
      {
        name: "Business"
      },
    ]
  },
  {
    title: "Enterprise",
    subTitles: [
      {
        name: "Personalize"
      },
      {
        name: "Automation"
      },
      {
        name: "Invoicing"
      },
      {
        name: "24/7 Support"
      },
    ]
  },
  {
    title: "Careers",
    subTitles: [
      {
        name: "Open Positions"
      },
      {
        name: "Part-Time"
      },
      {
        name: "Contractual"
      },
      {
        name: "Contact Us"
      },
    ]
  },
]
const page = () => {
  return (
    <section className='w-full flex flex-col mt-[100px] mb-[50px]'>
      <div className='flex justify-center flex-col'>
        <div className='lg:mx-20 mx-5 max-w-[1536px] flex-col'>
          <div className='flex justify-between footer-row-col'>
            <div className='flex h-fit'>
              <span>
                <Image src={Logo} alt='logo' />
              </span>
              <span className='font-bold text-[17px] text-[#36485c] my-auto ml-5'>
                Haleema Sadia
              </span>
            </div>
            <div className='md:hidde block'>
              <Accordion footerLinks={footerLinks} />
            </div>
            <div className='md:flex hidden xl:gap-[150px] lg:gap-[80px] md:gap-6'>
              {
                footerLinks.map((data, index) => (
                  <div key={index}>
                    <p className='text-[#36485c] text-[16px]'>
                      {data.title}
                    </p>
                    {
                      data.subTitles.map((subtitle, index) => (
                        <div key={index}>
                          <p className='font-semibold text-[16px] text-[#36485c] mt-[32px]'>
                            {subtitle.name}
                          </p>
                        </div>
                      ))
                    }
                  </div>
                ))
              }
            </div>
          </div>
          <div className='flex justify-between mt-[50px] copyrigth-row-col'>
            <span className='md:text-[16px] text-[14px] text-[#5f7896] font-semibold text-center mb-[40px] md:mb-0'>Copyright 2024, Your Sites. All rights reserved.</span>
            <span>
              <div className='flex justify-center md:gap-20 gap-10'>
                <span>
                  <Image src={x} alt='x' />
                </span>
                <span>
                  <Image src={Facebook} alt='facebook' />
                </span>
                {/* <span>
              <Image src={Feed} alt='feed' />
            </span> */}
              </div>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default page