import React from 'react'

const Page = () => {
  return (
    <section className='w-full flex flex-col mt-[100px]'>
      <div className='flex justify-center flex-col'>
        <div className='lg:mx-20 mx-5 max:w-[1536px] flex-col'>
          <div className='w-full rounded-2xl h-auto md:py-[88px] py-[56px] bg-cta'>
            <div className='flex flex-col items-center'>
              <h2 className='md:text-[56px] text-[32px] text-[#fff] md:w-[600px] w-[280px] leading-tight font font-semibold text-center'>Monitor your website like a pro</h2>
              <p className='md:text-[18px] text-[16px] text-[#fff] md:mt-[48px] mt-[24px] md:mb-[56px] mb-[40px] text-center md:w-[600px] w-[200px]'>Join over happy site onwers boosting productivity and efficiency</p>
              <div className='flex gap-6 cta-btn'>
                <button className='text-[18px] font-medium bg-white text-center text-[#eb2091] h-[56px] px-8 py-4 rounded'>Try for free</button>
                <button className='sm:text-[18px] text-[16px] font-medium text-[#fff] text-center h-[56px] py-4 flex'>Contact Sales
                  <span className='w-[28px] h-[28px] p-[6px] rounded-full ml-[10px] arrow-bg-color-section-two'>
                    <svg width="15" height="14" viewBox='0 0 15 14 ' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path d='M3.4165 7H11.5823' stroke='#eb2091' strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M7.5 2.91666L11.5833 6.99999L7.5 11.0833" stroke='#eb2091' strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Page