import React from 'react'
import { auth } from "@clerk/nextjs/server";
import { UserButton } from '@clerk/nextjs';
const page = async() => {
    const user = await auth()
   console.log(user)

  return (
    <div className='w-full  flex justify-around px-4 mt-8  '>
        <h1 className='text-off-white '>Welcome to the Admin Dashboard</h1><div className=''><UserButton/></div>
    </div>
  )
}

export default page
