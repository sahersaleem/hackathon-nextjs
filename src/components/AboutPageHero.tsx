import React from 'react'
import Wrapper from './Wrapper'

const AboutPageHero = () => {
  return (
    <Wrapper>
        <div className='flex xs:justify-center xs:items-center lg:justify-between xs:flex-col  lg:flex-row py-28  '>   <h1 className='text-[36px] text-[#2A254B] font-[400] leading-[50px] xs:w-[300px] lg:w-1/2 text-left' >
         A brand built on the love of craftmanship,
        quality and outstanding customer service
       
        </h1>
        <div className='xs:w-full lg:w-auto'> <button className='btn xs:w-full lg:w-auto h-[59px]  !bg-[#F9F9F9] py-[16px] px-[32px] text-[#2A254B] xs:mt-4 lg:mt-0'>View our products</button></div>
        </div>
    </Wrapper>
  )
}

export default AboutPageHero
