import React from 'react'
import LucyTarr from "public/pic/Image (9).png"
import Google from "public/pic/Google (1).png"
import GrantStyles from "public/pic/Image (7).png"
import Appstore from "public/pic/App Store.png"
import RalphEdwards from "public/pic/Image (10).png"
import x from "public/pic/x.png"
import AnnetteBlack from "public/pic/Image (11).png"
import Facebook from "public/pic/App Logo Inspiraton 42.png"
import RobertFox from "public/pic/Image (12).png"
import BrooklynSimmons from "public/pic/Image (13).png"

import Image from 'next/image'
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css"


const TestimonialsData1 = [
  {
    id: 1,
    avatar: LucyTarr,
    name: 'Lucy Tarr',
    company: "CEO of AB.co",
    details: "Ut enimLorem ipsum dolor sit, amet consectetu Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ad ming veniam quis nostrum exercuitatiom ullan? neno  voluptaten quia aut odit aut fugit.",
    logo: Google,
  },
  {
    id: 2,
    avatar: GrantStyles,
    name: 'Grant Styles',
    company: "CEO of Biffco Enterprises Ltd.",
    details: "Nerque prrore quisqion est, Lorem ipsum dolor sit, amet consectetu Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,qui doloram ispum sit anat ?Ut eni, ad mini venim, nosturm exeritatin ullam.",
    logo: Appstore,
  },
  {
    id: 3,
    avatar: RalphEdwards,
    name: 'Ralph Edwards',
    company: "CEO of Acme.co",
    details: "Convallin a crassLorem ipsum dolor sit, amet consectetu Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, senpra auctor natra ullan?  voluptes sit aspernatur aut odit aut fugit.",
    logo: x,
  },
  {
    id: 4,
    avatar: AnnetteBlack,
    name: 'Annette Black',
    company: "Manager at Barone LLC.",
    details: "Qui doloram Lorem ipsum dolor sit, amet consectetu Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,ispum sit anat ?Ut eni, ad mini venim, quis nosturm exeritatin ullam.",
    logo: Facebook,
  },
  {
    id: 5,
    avatar: RobertFox,
    name: 'Robert Fox',
    company: "CEO of Biffco Enterprises Ltd",
    details: "Qui doloram ispum sit anat ?Ut eni, ad mini Lorem ipsum dolor sit, amet consectetu Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,venim, quis nosturm exeritatin ullam.",
    logo: Google,
  },
  {
    id: 6,
    avatar: BrooklynSimmons,
    name: 'Brooklyn Simmons',
    company: "CEO of AB.co",
    details: "Qui doloram ispum sit anat ?Ut eni, ad mini venim, Lorem ipsum dolor sit, amet consectetu Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,quis nosturm exeritatin ullam.",
    logo: x,
  },

]
const TestimonialsData2 = [
  {
    id: 1,
    avatar: RobertFox,
    name: 'Robert Fox',
    company: "CEO of Biffco Enterprises Ltd",
    details: "Qui doloram ispum sit anat ?Ut eni, ad mini venim, quis nosturm exeritatin ullam.Lorem ipsum dolor sit, amet consectetu Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia.",
    logo: Google,
  },
  {
    id: 2,
    avatar: GrantStyles,
    name: 'Grant Styles',
    company: "CEO of Biffco Enterprises Ltd.",
    details: "Lorem ipsum dolor sit, amet consectetu Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,Nerque prrore quisqion est, qui doloram ispum sit anat ?Ut eni, a venim, exeritatin ullam.",
    logo: Appstore,
  },
  {
    id: 3,
    avatar: BrooklynSimmons,
    name: 'Brooklyn Simmons',
    company: "CEO of AB.co",
    details: "Qui doloram ispum Lorem ipsum dolor sit, amet consectetu Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,sit anat ?Ut eni, ad mini venim,  exeritatin ullam.",
    logo: x,
  },
  {
    id: 4,
    avatar: RalphEdwards,
    name: 'Ralph Edwards',
    company: "CEO of Acme.co",
    details: "Convallin a crass senpra auctor natraLorem ipsum dolor sit, amet consectetu Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, Frigilar molestia morbi metus.hows aut fugit.",
    logo: x,
  },
  {
    id: 5,
    avatar: LucyTarr,
    name: 'Lucy Tarr',
    company: "CEO of AB.co",
    details: "Ut enim ad ming veniam quis nostrum exercuitatiom ullan?Lorem ipsum dolor sit, amet consectetu Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptes at odit aut fugit.",
    logo: Google,
  },
  {
    id: 6,
    avatar: AnnetteBlack,
    name: 'Annette Black',
    company: "Manager at Barone LLC.",
    details: "Qui doloram ispum sit anat ?Ut eni, ad mini venim, quis nosturm exeritatin ullam.Lorem ipsum dolor sit, amet consectetu Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,",
    logo: Facebook,
  }
]


const page = () => {
  return (
    <section className='w-full flex flex-col bg-[#f4f8fa] lg:mt-[120px] mt-[50px]'>
      <div className='flex justify-center flex-col lg:pb-[100px] pb-[48px]'>
        <div className='lg:mx-20px mx-5 max-w-[1536px] flex-col'>
          <div className='flex flex-col items-center lg:pt-[96px] pt-[48px]'>
            <h3 className='md:text-[42px] text-[24px] font-semibold w-auto text-center leading-tight text-[#172026]'>Testimonials</h3>
            <p className='md:t-[16px] lg:text-[18px] md:text-[17px] text-[16px] lg:w-[676px] md:w-[700px] w-auto text-center text-[#36485c]'>Neno ipsum dolor sit amet consectetur adipisicing elit. Optio dignissimos, reiciendis, perferendis, exercitationem a quos enim repellendus debitis voluptas ea molestias? Nulla atque deserunt distinctio reiciendis in, enim im quis nostrud exercitation</p>
          </div>
        </div>


        <Marquee className="gap-[1.5]rem [--duration:30s] overflow-hidden lg:mt-[72px] mt-[24px]"
          innerClassName='gap-[1.5rem] [--gap:1.5rem]' fade={false}>
          {TestimonialsData1.map((data_1, index) => (
            <div key={index} className='bg-[#fff] rounded-2xl w-fit h-fit p-[24px]'>
              <div className='flex justify-between'>
                <div className='flex'>
                  <Image src={data_1.avatar} alt={data_1.name} width={0} height={0} className='lg:w-[64px] lg:h-[64px] w-[56px] h-[56px]' />
                  <div className='flex flex-col my-auto ml-[8px]'>
                    <span className='text-[text-[14px] text-[#172026] font-bold'>{data_1.name}</span>
                    <span className='text-[14px] text-[#5f7896]'>{data_1.company}</span>
                  </div>
                </div>
                <Image src={data_1.logo} alt={""} width={0} height={0} className='lg:w-[48px] lg:h-[48px] w-[40px] h-[40px]' />
              </div>
              <p className='w-[400px] mt-[16px] line-clamp-3 lg:text-[18px] text-[16px] text-[#36485c]'>{data_1.details}</p>
            </div>
          ))}
        </Marquee>



        <Marquee className="gap-[1.5]rem [--duration:30s] overflow-hidden mt-[24px]"
          innerClassName='gap-[1.5rem] [--gap:1.5rem]' reverse={true}>
          {TestimonialsData2.map((data_1, index) => (
            <div key={index} className='bg-[#fff] rounded-2xl w-fit h-fit p-[24px]'>
              <div className='flex justify-between'>
                <div className='flex'>
                  <Image src={data_1.avatar} alt={data_1.name} width={0} height={0} className='lg:w-[64px] lg:h-[64px] w-[56px] h-[56px]' />
                  <div className='flex flex-col my-auto ml-[8px]'>
                    <span className='text-[text-[14px] text-[#172026] font-bold'>{data_1.name}</span>
                    <span className='text-[14px] text-[#5f7896]'>{data_1.company}</span>
                  </div>
                </div>
                <Image src={data_1.logo} alt={""} width={0} height={0} className='lg:w-[48px] lg:h-[48px] w-[40px] h-[40px]' />
              </div>
              <p className='w-[400px] mt-[16px] line-clamp-3 lg:text-[18px] text-[16px] text-[#36485c]'>{data_1.details}</p>
            </div>
          ))}
        </Marquee>


        <div className='lg:block hidden'>
          <Marquee className="gap-[1.5]rem [--duration:30s] overflow-hidden  mt-[24px]"
            innerClassName='gap-[1.5rem] [--gap:1.5rem]' fade={false}>
            {TestimonialsData1.map((data_1, index) => (
              <div key={index} className='bg-[#fff] rounded-2xl w-fit h-fit p-[24px]'>
                <div className='flex justify-between'>
                  <div className='flex'>
                    <Image src={data_1.avatar} alt={data_1.name} width={0} height={0} className='lg:w-[64px] lg:h-[64px] w-[56px] h-[56px]' />
                    <div className='flex flex-col my-auto ml-[8px]'>
                      <span className='text-[text-[14px] text-[#172026] font-bold'>{data_1.name}</span>
                      <span className='text-[14px] text-[#5f7896]'>{data_1.company}</span>
                    </div>
                  </div>
                  <Image src={data_1.logo} alt={""} width={0} height={0} className='lg:w-[48px] lg:h-[48px] w-[40px] h-[40px]' />
                </div>
                <p className='w-[400px] mt-[16px] line-clamp-3 lg:text-[18px] text-[16px] text-[#36485c]'>{data_1.details}</p>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  )
}

export default page