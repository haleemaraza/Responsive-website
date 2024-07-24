import React from 'react'
import HeroMobile from "public/pic/Mobile - Dark.png"
import HeroWeb from "public/pic/Desktop - light.png"

import Google from "public/pic/Google.png"
import Slack from "public/pic/Slack.png"
import Trustpilot from "public/pic/Trustpilot.png"
import Cnn from "public/pic/CNN logo.png"
import Clutch from "public/pic/Clutch.png"

import Image from 'next/image'
import { Slackey } from 'next/font/google'


const page = () => {
  return (
    <section className='w-full flex flex-col'>
      <div className='flex justify-center pt-[15px]'>
        <div className='lg:mx20 mx-5 max-w-[1536px] my-6 flex-col '>
          <div className='flex flex-col items-center'>
            <h1 className=' lg:font-bold md-text-[64px] text-[#172026] text-[32px] sm:font-semiblod sm:w-[665px] xs:w-[380px] w-auto text-center leading tight'>
              Start monitoring your website like a pro
            </h1>
            <p className='py-6 lg:text-[18px] md:text-[17px] text-[16px] lg:w-[846px] md:w-[700px] w-auto text-center text-[#36485c]'>
              Get a bird&#39;s eye veiw with our customizable dashboard. Stay on top of things! Revamp your work process with our game changing features. Boost productivity are efficiency!
            </p>
            <div className='flex gap-6 pt-[20px]'>
              <button className='  sm:text-[18px] text-[16px] font-medium text-white text-center bg-[#4328eb] h-[56px] px-8 py-4 rounded '>
                Try for free
              </button>
              <button className='sm:text-[18px] text-[16px] font-medium  text-[#4328eb] text-center h-[56px] py-4 flex '>
                Veiw Pricing
                <span className='w-[28px] h-[28px] p-[6px] rounded-full ml-[10px] arrow-bg-color-hero'>
                  <svg width="15" height="14" viewBox='0 0 15 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M3.4165 7H11.5832' stroke='#4328eb' strokeWidth="1.5" strokeLinecap='round' strokeLinejoin="round" />
                    <path d='M7.5 2.91666L11.5833 6.99999L7.5 11.0833' stroke='#4328EB' strokeWidth="1.5" strokeLinecap='round' strokeLinejoin='round' />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center justify-between hero-bg-gradient '>
        <div className='mt-[0px] flex flex-col items-center justify-center'>
          <Image src={HeroWeb} alt={''} width={0} height={0} className='rounded-2xl xl:w-[1200px] xl:h-[950px] lg:w-[1100px] lg:h-[820px] md:w-[870px] md:h-[670px] sm:h-[420px] sm:w-[500px] xs:w-[450px] xs:h-[349px] w-[450px] h-[350px] shadow-img' />
          <Image src={HeroMobile} alt={''} width={0} height={0} className='sm:rounded-2xl rounded-lg xl:ml-[833px] xl:mt-[-610px] lg:ml-[653px] lg:mt-[-530px] md:ml-[510px] md:mt-[-441px] sm:ml-[431px] sm:mt-[-290px] xs:ml-[312px] xs:mt-[-250px] ml-[249px] mt-[-600px] xl:w-[300px] xl:h-[635px] lg:w-[275px] lg:h-[535px] md:w-[220px] md:h-[445px] sm:w-[130px] sm:h-[280px] xs:w-[105px] xs:h-[218px] w-[98px] h-[90px]  shadow-img' />
        </div>
        <div className='lg:mx-20 mx-5 max-w-[1536px] flex flex-col lg:flex-row logo-row-col'>
          <span className='md:text-[18px] text-[16px] text-white my-auto xl:mr-[30px] xl:w-[330px] lg-w[368px] text-center lg:text-start'>
            Trusted by these companies
          </span>
          <div className='lg:flex hidden hustify-between w-full xl:gap-24 lg:gap-12'>
            <span>
              <Image src={Google} alt={''} width={0} height={0} className='xl:w-[104px] xl:h-[64px] lg:w-[90px] lg:h-[55px]' />
            </span>
            <span>
              <Image src={Slack} alt={''} width={0} height={0} className='xl:w-[134px] xl:h-[64px] lg:w-[114px] lg:h-[55px]' />
            </span>
            <span>
              <Image src={Trustpilot} alt={''} width={0} height={0} className='xl:w-[180px] xl:h-[64px] lg:w-[160px] lg:h-[55px]' />
            </span>
            <span>
              <Image src={Cnn} alt={''} width={0} height={0} className='xl:w-[72px] xl:h-[64px] lg:w-[90px] lg:h-[52px]' />
            </span>
            <span>
              <Image src={Clutch} alt={''} width={0} height={0} className='xl:w-[93px] xl:h-[64px] lg:w-[73px] lg:h-[55px]' />
            </span>

          </div>
          <div className="block flex-col lg:hidden justify-between w-full items-center mt-[16px]">
            <div className="flex flex-row gap-8 w-fit  px-20">
              <span>
                <Image src={Google} alt={''} width={0} height={0} className='md:w-[104px] md:h-[64px] sm:w-[90px] sm:h-[55px] w-[80px] h-[45px]' />
              </span>
              <span>
                <Image src={Slack} alt={''} width={0} height={0} className='md:w-[134px] md:h-[64px] sm:w-[114] sm:h-[55px] w-[104px] h-[45px]' />
              </span>
            </div>
            <div className='flex flex-row gap-8 w-fit md:md:mt-2 mt-1 mb-6 ml-[20px]'>
              <span>
                <Image src={Trustpilot} alt={''} width={0} height={0} className='md:w-[180px] md:h-[64px] sm:w-[160px] sm:h-[55px] w-[150px] h-[45px]' />
              </span>
              <span>
                <Image src={Cnn} alt={''} width={0} height={0} className='md:w-[72px] md:h-[64px] sm:w-[52px] sm:h-[55px] w-[42px] h-[45px]' />
              </span>
              <span>
                <Image src={Clutch} alt={''} width={0} height={0} className='md:w-[93px] md:h-[64px] sm:w-[73px] sm:h-[55px] w-[45px] h-[45px]' />
              </span>
            </div>
            <div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default page