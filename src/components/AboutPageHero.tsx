import React from 'react'
import Wrapper from './Wrapper'

const AboutPageHero = () => {
  return (
    <Wrapper>
        <div className='flex justify-between  py-28'>   <h1 className='text-[36px] font-[400] leading-[50px] w-1/2 text-justify' >
         A brand built on the love of craftmanship,
        quality and outstanding customer service
       
        </h1>
        <div> <button className='btn h-[59px] !bg-[#F9F9F9] py-[16px] px-[32px] text-[#2A254B]'>View our products</button></div>
        </div>
    </Wrapper>
  )
}

export default AboutPageHero
