import React from 'react'
import { Accordion } from '../Accordion/Accordion'

const Data = [
  {
    title: "Eum nostrum corporis ullam inventore quis modi omnis amet recusandae ipsam ut ?",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea nisi dolorum placeat ipsam perspiciatis vel optio minus, dicta obcaecati rem odit at nobis quisquam eum Lorem ipsum dolor sit amet consectetur.?"
  },
  {
    title: "Omnis amet recusandae ipsam ut Inventore quis modi eum nostrum corporis ullam?",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea nisi dolorum placeat ipsam perspiciatis vel optio minus, dicta obcaecati rem odit at nobis quisquam eum Lorem ipsum dolor sit amet consectetur.?"
  },
  {
    title: "Quis modi omnis amet recusandae ipsam ut eum Inventore nostrum corporis eitly?",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea nisi dolorum placeat ipsam perspiciatis vel optio minus, dicta obcaecati rem odit at nobis quisquam eum Lorem ipsum dolor sit amet consectetur.?"
  },
  {
    title: "Trporis ullam inventore quis modi omnis amet recusandae ipsam ut eum nostrum c?",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea nisi dolorum placeat ipsam perspiciatis vel optio minus, dicta obcaecati rem odit at nobis quisquam eum Lorem ipsum dolor sit amet consectetur.?"
  },
  {
    title: "Inventore quis modi omnis amet recusandae ipsam ut eum nostrum corporis ullam?",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea nisi dolorum placeat ipsam perspiciatis vel optio minus, dicta obcaecati rem odit at nobis quisquam eum Lorem ipsum dolor sit amet consectetur.?"
  },
  {
    title: " recusandae ipsam ut eum nostrum ynventore quis modi omnis amet corporis ullam?",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea nisi dolorum placeat ipsam perspiciatis vel optio minus, dicta obcaecati rem odit at nobis quisquam eum Lorem ipsum dolor sit amet consectetur.?"
  },
  {
    title: "Amet recusandae ipsam ut eum nostrum inventore quis modi omnis  corporis ullam?",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea nisi dolorum placeat ipsam perspiciatis vel optio minus, dicta obcaecati rem odit at nobis quisquam eum Lorem ipsum dolor sit amet consectetur.?"
  },
]
const page = () => {
  return (
    <section className='w-full flex flex-col md:mt-[120px]'>
      <div className='flex justify-center'>
        <div className='lg:mx-20 mx-5 max-w-[1536px] my-6 flex-col'>
          <div className='lg:flex  lg:flex-row  gap-6  faq-row-col'>
            <div className='md:w-[35%] sm:flex-col-reverse '>
              <div className='py-[32px] pr-[56px]  '>
                <p className='xl:text-[18px] text-[16px] text-[#eb2891] font-medium'>Frequently Asked Questions
                </p>
                <h3 className='xl:text-[45px] text-[24px] text-[#172026] mt-[16px] font-bold leading-tight'>Lets clarify some of your question
                </h3>
                <p className='xl:text-[18px] text-[16px] text-[#36485c] mt-[16px] lg:leading-tight leading-snug xl:w-[455px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam aliquid quis ipsa consectetur non similique Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nobis cum a veniam harum aspernatur?.</p>
              </div>
            </div>


            <div className=' lg:w-[699px]'>
              <Accordion data={Data} />
            </div>


          </div>
        </div>
      </div>
    </section >
  )
}

export default page