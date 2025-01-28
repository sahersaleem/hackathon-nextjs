import React from 'react'
import Products from '../../_components/Products'

const Page = () => {
  return (
    <div className='w-full h-auto bg-black/55'>
      <div>
          <h1 className='text-off-white text-center mt-4'>All Products</h1>

       <Products/>

      </div>
    </div>
  )
}

export default Page
