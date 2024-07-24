import React from 'react'
import F1 from "/public/pic/image.png"
import F2 from "/public/pic/image (1).png"
import F3 from "/public/pic/image (2).png"

import Image from "next/image"

const page = () => {
  return (
    <section className="w-full flex-col justify-center lg:mt-[120px] mt-[60px]">
      <div className='flex justify-center'>
        <div className='lg:mx-20 mx-5 max-w-[1536px] flex-col '>
          <div className='flex lg:flex-row gap-6 flex-col-reverse'>
            <div className='sm:w-[60%] xs:w-[70%] w-[100%] 
            xxl:pt-[56px] xxl:pb-[56px] xxl:pr-[56px]
            xl:pt-[42px] xl:pb-[42px] xl:pr-[42px]
            lg:pt-[12px] lg:pb-[12px] lg:pr-[12px] my-auto mx-auto  '>
              <p className='xl:text-[18px] lg:text-[16px] text-[#0085ff] font-medium '>Sales Monitoring</p>
              <h3 className='xl:text-[42px] lg:text-[36px] text-[#172826] mt-[16px] font medium leading-tight  lg:block hidden'>Simplify your sales montoring</h3>
              <p className='xl:text-[18px] text-[16px] text-[#36485e] mt-[16px] lg:leading-tight leading-snug xl:w-[500px] '>Stay on top of things and revamp your work process with our game changing features. Get a bird&#39;s eye veiw with your our customizable dashboard</p>
              <div className='my-[24px]'>
                <p className='flex xl:mt[52px] lg:mt[28px] xl:text[18px] lg:-[16px]'>
                  <span className='mr-[16px] mt-[5px]'>
                    <svg width="24" height="24" viewBox='0 0 24 24' fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="#36485C" strokeWidth="2" strokeLinecap="round" strokeLinejoin='round' />

                    </svg>
                  </span>
                  Lorem ipsum dolor sittion consectet
                </p>
                <p className='flex xl:my-[20px] lg:my-[16px] my-[12px] xl:text-[18px] lg:text-[16px]'>
                  <span className='mr-[16px] mt-[5px]'>
                    <svg width="24" height="24" viewBox='0 0 24 24' fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="#36485C" strokeWidth="2" strokeLinecap="round" strokeLinejoin='round' />

                    </svg>
                  </span>
                  Conectector adjesting elity
                </p>
                <p className='flex mb-[20px] xl:text-[18px] lg:text-[16px]'>
                  <span className='mr-[16px] mt-[5px] '>
                    <svg width="24" height="24" viewBox='0 0 24 24' fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="#36485C" strokeWidth="2" strokeLinecap="round" strokeLinejoin='round' />

                    </svg>
                  </span>
                  Sed do euiment tempering incsdent ut obova
                </p>
              </div>
              <button className='sm:text-[18px] text-[16px] font-medium text-[#4328eb] text-center h-[56px] py-4 flex'>Learn More
                <span className='w-[28px] h-[28px] p-[6px] rounded-full ml-[10px] arrow-bg-color-hero'>
                  <svg width="15" height="14" viewBox='0 0 15 14 ' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M3.4165 7H11.5823' stroke='#432BEB' strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7.5 2.91666L11.5833 6.99999L7.5 11.0833" stroke='#4328EB' strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>
            </div>
            <div className=' sm:w-[60%] xs:w-[70%] w-[100%] mx-auto'>
              <div className='flex justify-end'>
                <div className='rounded-t-2xl rounded-bl-2xl bg-[#e3f1ff] pt-[49px] pl-[39px] md:pt-[59px] md:pl-[49px]  xl:pl-[69px] w-fit h-fit'>
                  <Image src={F1} alt="feacture section image 1" width={0} height={0} className='xxl:w-[512px] xxl:h-[450px] xl:w-[460px] xl:h-[480px]' />
                </div>
              </div>
            </div>
            <div className='lg:hidden block sm:w-[60%] xs:w-[70%] w-[100%] mx-auto '>
              <p className='text-[16px] text-[#0085ff] font-medium'>Sales Monitoring</p>
              <h3 className='text-[23px] text-[#172026] mt-[16px] font-medium leading-tight'>Simplify your sales monitoring</h3>
            </div>
          </div>



          <div className='flex gap-6 lg:mt-[80px] lg:mb-[80px] mt-[40px] mb-[40px] flex-col section-row-col'>
            <div className='lg:hidden block sm:w-[60%] xs:w-[70%] w-[100%] mx-auto'>
              <p className='text-[16px] text-[#00a424] font-medium '>Customer Support</p>
              <h3 className='text-[24px] text-[#172026] mt-[16px] font-medium leading-tight'>
                Get in touch with customers
              </h3>
            </div>
            <div className='lg:w-[50%] sm:w-[60%] xs:w-[70%] w-[100%] mx-auto'>
              <div className='rounded-xl bg-[#dcfcdd] w-auto h-auto flex flex-col justify-start'>
                <div className='xl:pb-[100px] md:pb-[60px] pb-[50px]'>
                  <Image src={F2} alt={'features section image 2'} width={0} height={0} className='mx-auto rounded-b-2xl xl:w-[477px] xl:h-[500px] md:w-[360px] md:h-[390px] sm:w[305px]sm:h-[330px] w-[260px] h-[280px]' />
                </div>
              </div>
            </div>
            <div className='sm:w-[60%] xs:w-[70%] w-[100%] xl:pt-[56px] xl:pb-[56px] xl:pr-[56px] lg:pb-[12px] lg:pr-[12px] my-auto mx-auto lg:pl-[120px]'>
              <p className='xl:text-[18px] lg:text-[16px] text-[#00a424] font-medium   lg:block'>Customer Support</p>
              <h3 className='xl:text-[42px] lg:text-[36px] text-[#172026] mt-[16px] font-medium leading-tight hidden lg:block' >Get in touch with your customers</h3>
              <p className='xl:text-[18px] text-[16px] text-[#36485c] mt-[16px] lg:leading-tight leading-snug xl:w-[500px]'>Stay on top of the things and revamp your work process with our game changing. Get a bird&#39;s eye veiw with our customizable dashboard.</p>

              <div>
                <div className='my-[24px]'>
                  <p className='flex xl:mt[52px] lg:mt[28px] xl:text[18px] lg:-[16px]'>
                    <span className='mr-[16px] mt-[5px]'>
                      <svg width="24" height="24" viewBox='0 0 24 24' fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="#36485C" strokeWidth="2" strokeLinecap="round" strokeLinejoin='round' />

                      </svg>
                    </span>
                    Lorem ipsum dolor sittion consectet
                  </p>
                  <p className='flex xl:my-[20px] lg:my-[16px] my-[12px] xl:text-[18px] lg:text-[16px]'>
                    <span className='mr-[16px] mt-[5px]'>
                      <svg width="24" height="24" viewBox='0 0 24 24' fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="#36485C" strokeWidth="2" strokeLinecap="round" strokeLinejoin='round' />

                      </svg>
                    </span>
                    Conectector adjesting elity
                  </p>
                  <p className='flex mb-[20px] xl:text-[18px] lg:text-[16px]'>
                    <span className='mr-[16px] mt-[5px] '>
                      <svg width="24" height="24" viewBox='0 0 24 24' fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="#36485C" strokeWidth="2" strokeLinecap="round" strokeLinejoin='round' />

                      </svg>
                    </span>
                    Sed do euiment tempering incsdent ut obova
                  </p>
                </div>
                <button className='sm:text-[18px] text-[16px] font-medium text-[#00a424] text-center h-[56px] py-4 flex'>Learn More
                  <span className='w-[28px] h-[28px] p-[6px] rounded-full ml-[10px] arrow-bg-color-section-two'>
                    <svg width="15" height="14" viewBox='0 0 15 14 ' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path d='M3.4165 7H11.5823' stroke='#432BEB' strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M7.5 2.91666L11.5833 6.99999L7.5 11.0833" stroke='#4328EB' strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>

              </div>
            </div>
          </div>



          <div className='flex lg:flex-row gap-6 flex-col-reverse'>
            <div className='sm:w-[60%] xs:w-[70%] w-[100%] xl:pt-[56px] xl:pb-[56px] xl:pr-[56px] lg:pt-[12px] lg:pb-[12px] lg:pr-[12px] my-auto mx-auto'>
              <p className='xl:text-[18px] lg:text-[16px] text-[#eb2891] font-medium leading-tight  lg:block'>Growth Monitoring</p>
              <h3 className='xl:text-[42px] lg:text-[36px] text-[#172026] mt-[16px] lg:leading-tight leading-sung hidden lg:block'>Monitor your sites new subscribers</h3>
              <p className='xl:text-[18px] lg:text-[16px] text-[#36485c] mt-[16px] lg:leading-tight leading-snug xl:w-[520px]'>Stay on top of things and revamp your work process with our game changing features. Get a bird&#39;s eye view with our customizable dashboard.</p>
              <div className='flex xl:my-[32px] lg:my-[28px] my-[24px]'>
                <div className='w-[50%]'>
                  <span className='xl:text-[32px] lg:text-[28px] text-[20px] text-[#172026] font-medium'>100+</span>
                  <p className='xl:text-[18px] text-[16px] text-[#5f7896] mt-[10px]'>Lorem ipsum dolor sit</p>
                </div>
                <div className='w-[50%]'>
                  <span className='xl:text-[32px] lg:text-[28px] text-[20px] text-[#172026] font-medium'>800+</span>
                  <p className='xl:text-[18px] text-[16px] text-[#5f7896] mt-[10px]'>Conse adipisicing elitys</p>
                </div>
              </div>
              <button className='sm:text-[18px] text-[16px] font-medium text-[#eb2891] text-center h-[56px] py-4 flex'>Learn More
                <span className='w-[28px] h-[28px] p-[6px] rounded-full ml-[10px] arrow-bg-color-pink'>
                  <svg width="15" height="14" viewBox='0 0 15 14 ' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M3.4165 7H11.5823' stroke='#eb2891' strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7.5 2.91666L11.5833 6.99999L7.5 11.0833" stroke='#eb2891' strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>
            </div>
            <div className='lg:w-[50%] sm:w-[60%] xs:w-[70%] w-[100%] mx-auto h-auto'>
              <div className='rounded-sxl bg-[#fde7f3] w-auto h-auto flex flex-col juustify-end'>
                <div className='xl:pt-[100px] lg:pt-[50px] pt-[50px]'>
                  <Image src={F3} alt={'feature section image 3'} width={0} height={0} className='mx-auto xl:w-[400px] xl:h-[445px] lg:w-[290px] lg:h-[368px] md:h-[350px] md:w-[405px] sm:h-[400px] sm:w-[422px] w-[280px] h-[330px]' />

                </div>

              </div>

            </div>
            <div className='lg:hidden block sm:w-[60%] xs:w-[70%] w-[100%] mx-auto'>
              <p className='text-[16px] text-[#eb2891] font-medium'>Growth Monitoring</p>
              <h3 className=' text-[24px] text-[#172026] mt-[16px] font-medium leading-tight'>Monitor your site&#39;s new subscribers</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default page