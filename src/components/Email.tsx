import React from 'react'
import Wrapper from './Wrapper'

const Email = () => {
  return (
    <div className='bg-off-white lg:py-20'>
        <Wrapper>
            <div className=' bg-white py-20 '>
                <div className='mx-w-5xl  flex flex-col gap-[16px]'>  <h1 className="text-center xs:text-[20px] ">Join the club and get the benefits</h1>
                <p className='medium text-center'>Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</p>
                <div className='flex justify-center mt-20 xs:flex-col  md:flex-row xs:gap-y-2 sm:gap-y-0 lg:flex-row'><input placeholder='your@email.com' className='xs:w-full sm:w-[327px] px-7 hover:outline-none bg-off-white py-5'/><button className='btn'>Sign Up</button></div>
                
                
                </div>
                
              
            </div>
        </Wrapper>
      
    </div>
  )
}

export default Email
