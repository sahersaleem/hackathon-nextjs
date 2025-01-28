import Image from 'next/image'
import React from 'react'


interface IProps {
    src:string,
    name:string,
    price:number,
}

const Card = ({src , name , price}:IProps) => {
  return (
    <div className='bg-black border-white/20 border-[2px] p-6'>
      <Image src={src} width={300} height={400} alt='product-image' className='max-w-[260px] min-w-[260px]
       max-h-[300px] min-h-[300px] object-center object-cover
      '/>
      <div className='space-y-3 mt-4'>
       <h2 className='text-xl '>{name}</h2>
       <p>${price}</p>
      </div>
    </div>
  )
}

export default Card
