import React from 'react'
import Wrapper from './Wrapper'
import { Card } from './Listings'
import { Toaster } from 'react-hot-toast'
const PopularProducts= () => {
    return (
      <div className='bg-white lg:py-20 w-full'>
        <Toaster position='bottom-left'/>
        <Wrapper>
  
          <h1 className='section-heading mb-8  xs:mx-6 lg:mx-0 text-left'>Our popular products</h1>
          <div className='flex justify-evenly'>
              <Card image='/images/item5.png' name='The Dandy chair' price={'£250'} width={630}  height={375} className='xs:hidden lg:flex'/>
              <Card image='/images/item1.png' name='The Dandy chair' price={'£250'}/>
              <Card image='/images/item6.png' name='The Dandy chair' price={'£250'}/>
             
  
          </div>
          <div className='flex justify-center mt-14'> <button className='btn xs:w-full lg:w-auto !bg-[#F9F9F9] !text-blue'>View Collection</button></div>
         
        </Wrapper>
      </div>
    )
  }
  
  export default PopularProducts
  